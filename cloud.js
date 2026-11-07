/* PetroPrep Cloud — autenticação, sincronização e painel de acompanhamento.
   Somente configuração PÚBLICA no navegador. Banco protegido por RLS (schema.sql). */
(() => {
  'use strict';
  const cfg=window.PETROPREP_CONFIG||{};
  const enabled=/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(String(cfg.url||'')) &&
    typeof cfg.publishableKey==='string' && cfg.publishableKey.length>20;
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let db=null, bridge=null, user=null, admin=false, timer=null, syncing=Promise.resolve(), initToken=0;
  let overlay=null, adminRows=[], adminProfiles=[];
  const genId=()=>window.crypto?.randomUUID?.()||'00000000-0000-4000-8000-'+Math.random().toString(16).slice(2).padEnd(12,'0').slice(0,12);
  const unique=a=>[...new Set((a||[]))];
  const mergeObjects=(a,b)=>[...new Map([...(a||[]),...(b||[])].filter(x=>x&&x.id).map(x=>[x.id,x])).values()];
  const status=t=>{const e=document.querySelector('#cloudAccountText');if(e)e.textContent=t;const hint=document.querySelector('#loginHint');if(hint)hint.style.display=(user?'none':'flex')};
  const notify=t=>bridge?.notify(t);
  const currentState=()=>bridge?.getState();
  const isAuthenticated=()=>Boolean(user);
  function setOverlay(html,wide=false){
    if(!overlay){overlay=document.createElement('div');overlay.className='cloud-overlay';document.body.appendChild(overlay)}
    overlay.innerHTML=`<section class="cloud-panel ${wide?'wide':''}" role="dialog" aria-modal="true" aria-label="Conta PetroPrep">${html}</section>`;
  }
  function closeOverlay(){if(!user)return;overlay?.remove();overlay=null}
  const unlock=()=>document.body.classList.add('petro-authenticated');
  const lock=()=>document.body.classList.remove('petro-authenticated');
  function showAuthUnavailable(reason){lock();setOverlay(`${title('Acesso indisponível','Para acessar o PetroPrep, é necessário entrar na sua conta.')}${message(reason,true)}<p class="cloud-top-note">Recarregue a página para tentar novamente. Seus dados não foram apagados.</p>`);}
  function showChecking(){lock();setOverlay(`<div style="text-align:center;padding:26px 10px"><img src="logo-petroprep-p.svg" alt="PetroPrep" width="60" height="60"><h2 class="cloud-heading">PetroPrep</h2><p class="cloud-muted">Verificando sua sessão com segurança…</p></div>`);}
  const title=(h,desc)=>`<div class="cloud-headrow"><div><h2 class="cloud-heading">${h}</h2><p class="cloud-muted">${desc}</p></div><button type="button" class="cloud-close" data-cloud="close" aria-label="Fechar">×</button></div>`;
  const message=(msg,isError=false)=>`<p class="${isError?'cloud-error':'cloud-good'}" role="status">${escape(msg)}</p>`;
  function showLogin(which='login',msg='',error=false){
    if(user)return;
    lock();
    const register=which==='register';
    setOverlay(`${title(register?'Criar minha conta':'Entrar no PetroPrep','Suas respostas e aulas sincronizadas entre computador e celular.')}
    ${msg?message(msg,error):''}
    <div class="cloud-actions" style="margin:2px 0 18px"><button class="btn ${register?'outline':'secondary'} small" data-cloud="login-tab">Entrar</button><button class="btn ${register?'secondary':'outline'} small" data-cloud="register-tab">Cadastrar</button></div>
    <form id="cloudAuthForm">
      ${register?'<label class="cloud-field">Nome<input name="name" type="text" maxlength="80" autocomplete="name" placeholder="Como quer aparecer no painel" required></label>':''}
      <label class="cloud-field">E-mail<input name="email" type="email" autocomplete="email" required placeholder="voce@exemplo.com"></label>
      <label class="cloud-field">Senha<input name="password" type="password" minlength="6" autocomplete="${register?'new-password':'current-password'}" required placeholder="Mínimo de 6 caracteres"></label>
      <button class="btn" type="submit" style="width:100%">${register?'Criar conta':'Entrar'} →</button>
    </form>
    <div class="cloud-actions"><button class="cloud-link" data-cloud="reset-password">Esqueci minha senha</button></div>
    <div class="cloud-top-note">Os dados dos estudantes ficam privados. Só a conta marcada como administradora pode acompanhar os resultados das outras pessoas.</div>`);
    overlay.querySelector('#cloudAuthForm').dataset.mode=register?'register':'login';
  }
  function showAccount(){
    if(!enabled){showAuthUnavailable('O sistema de login está sem configuração.');return}
    if(!user){showLogin();return}
    setOverlay(`${title('Minha conta','Sincronização com o banco de dados ativa.')}
    <div class="cloud-badge">✓ ${escape(user.email||'Conta conectada')}</div>
    <p class="cloud-muted" style="margin-top:15px">Cada resposta tem seu próprio registro, com data, questão e resultado. Seu painel pessoal mostra os seus dados.</p>
    <div class="cloud-actions"><button class="btn secondary small" data-cloud="sync">Sincronizar agora</button>${admin?'<button class="btn small" data-cloud="admin">Painel de alunos ↗</button>':''}${localStorage.getItem('petroprep_estado_v1')?'<button class="btn outline small" data-cloud="import-old">Importar progresso antigo</button>':''}<button class="btn outline small" data-cloud="logout">Sair da conta</button></div>
    <p class="cloud-top-note">O histórico não é apagado ao sair. Em um novo dispositivo, entre com a mesma conta.</p>`);
  }
  async function authSubmit(e){
    e.preventDefault(); const form=e.target;const v=Object.fromEntries(new FormData(form));const btn=form.querySelector('button[type="submit"]');
    btn.disabled=true;btn.textContent='Conectando…';
    try{
      if(form.dataset.mode==='register'){
        const {data,error}=await db.auth.signUp({email:v.email.trim(),password:v.password,options:{data:{display_name:v.name.trim()},emailRedirectTo:location.origin+location.pathname}});
        if(error)throw error;
        if(data.session){closeOverlay();notify('Conta criada e conectada!')}
        else showLogin('login','Cadastro recebido. Confira seu e-mail e confirme a conta antes de entrar.');
      } else {
        const {error}=await db.auth.signInWithPassword({email:v.email.trim(),password:v.password});
        if(error)throw error;
        closeOverlay();notify('Login efetuado. Carregando seu histórico…');
      }
    }catch(e){showLogin(form.dataset.mode==='register'?'register':'login',e.message||'Falha ao entrar.',true)}
  }
  async function resetPassword(){
    const email=overlay?.querySelector('input[name="email"]')?.value.trim();
    if(!email){showLogin('login','Digite seu e-mail no formulário e clique novamente em "Esqueci minha senha".',true);return}
    const {error}=await db.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});
    showLogin('login',error?.message||'Se a conta existir, você receberá um e-mail com instruções.',Boolean(error));
  }
  function rowsToHistory(rows){return rows.map(x=>({id:x.question_id,attemptId:x.id,answer:x.answer,correct:x.correct,date:x.answered_at,mode:x.mode}))}
  async function getAll(table,columns,filterUser=null){
    const result=[];
    for(let offset=0;offset<50000;offset+=1000){
      let query=db.from(table).select(columns).range(offset,offset+999);
      if(filterUser)query=query.eq('user_id',filterUser);
      if(table==='question_attempts')query=query.order('answered_at',{ascending:true});
      const {data,error}=await query;
      if(error)throw error;
      result.push(...data);
      if(data.length<1000)break;
    }
    return result;
  }
  function mergeState(local,remote,attempts){
    const rs=remote||{}, merged={...bridge.initial(),...local};
    merged.read=unique([...(rs.read_topics||[]),...(local.read||[])]);
    merged.bookmark=unique([...(rs.bookmarks||[]),...(local.bookmark||[])]);
    merged.weeks=unique([...(rs.finished_weeks||[]),...(local.weeks||[])]);
    merged.customTopics=mergeObjects(rs.custom_topics,local.customTopics);
    merged.customQuestions=mergeObjects(rs.custom_questions,local.customQuestions);
    merged.theme=remote?.theme||local.theme||'light';
    const historyMap=new Map(rowsToHistory(attempts).map(x=>[x.attemptId,x]));
    for(const entry of (local.history||[])){
      if(!entry.attemptId)entry.attemptId=genId();
      if(!historyMap.has(entry.attemptId))historyMap.set(entry.attemptId,entry);
    }
    merged.history=[...historyMap.values()].sort((a,b)=>String(a.date).localeCompare(String(b.date))).slice(-5000);
    return merged;
  }
  async function saveSettings(){
    if(!user)return;
    const userId=user.id;
    const snapshot=currentState();
    const payload={user_id:userId,read_topics:snapshot.read,bookmarks:snapshot.bookmark,
      finished_weeks:snapshot.weeks,custom_topics:snapshot.customTopics,
      custom_questions:snapshot.customQuestions,theme:snapshot.theme,updated_at:new Date().toISOString()};
    syncing=syncing.catch(()=>{}).then(async()=>{
      if(user?.id!==userId)return;
      const {error}=await db.from('user_settings').upsert(payload,{onConflict:'user_id'});
      if(error)throw error;
    });
    try{await syncing}catch(e){notify('Alteração salva no navegador; não foi possível sincronizar as preferências.')}
  }
  function persist(){if(!user)return;clearTimeout(timer);timer=setTimeout(saveSettings,650)}
  async function resetAnswers(){
    if(!user)return;
    const userId=user.id;
    const {error}=await db.from('question_attempts').delete().eq('user_id',userId);
    if(error)notify('Progresso zerado localmente, mas não foi possível apagar o histórico na nuvem: '+error.message);
    else notify('Histórico de respostas também apagado da nuvem.');
  }
  async function syncAttempts(){
    if(!user)return;
    const userId=user.id;const all=currentState()?.history||[];
    const batches=[];
    for(const item of all){
      if(!item.attemptId)continue;
      batches.push({id:item.attemptId,user_id:userId,question_id:item.id,answer:item.answer,
        correct:item.correct,mode:item.mode||'practice',answered_at:item.date||new Date().toISOString()});
    }
    for(let offset=0;offset<batches.length;offset+=200){
      if(user?.id!==userId)return;
      const {error}=await db.from('question_attempts').upsert(batches.slice(offset,offset+200),{onConflict:'id',ignoreDuplicates:true});
      if(error)throw error;
    }
  }
  async function trackAnswer(item){
    if(!user)return;
    const userId=user.id;
    const {error}=await db.from('question_attempts').upsert({id:item.attemptId,user_id:userId,question_id:item.id,
      answer:item.answer,correct:item.correct,mode:item.mode,answered_at:item.date},
      {onConflict:'id',ignoreDuplicates:true});
    if(error)notify('Resposta salva no navegador. Falha na nuvem; tente “Sincronizar agora”.');
  }
  async function loadSession(session){
    const id=session?.user?.id||null;
    // Supabase emits INITIAL_SESSION and getSession concurrently. Do not
    // invalidate an active initialization for the same authenticated account.
    if(id && id===user?.id)return;
    if(!id && !user){showLogin();return;}
    const token=++initToken; clearTimeout(timer);
    if(!id){
      user=null;admin=false;lock();bridge.setStorageKey('petroprep_local_visitante_v2');
      bridge.applyState(bridge.getLocalState());status('Entrar / Cadastrar');
      if(enabled)showLogin();return;
    }
    const newUser=session.user;
    user=newUser;admin=false;unlock();status('Carregando…');closeOverlay();
    bridge.setStorageKey(`petroprep_user_${newUser.id}_v2`);
    const local=bridge.getLocalState();
    bridge.applyState(local);
    try{
      const name=String(newUser.user_metadata?.display_name||newUser.email?.split('@')[0]||'Estudante').slice(0,80);
      const profilePromise=db.from('profiles').upsert({id:newUser.id,display_name:name,email:newUser.email||''},{onConflict:'id'});
      const [s,attempts,adminR,profileR]=await Promise.all([
        db.from('user_settings').select('*').eq('user_id',newUser.id).maybeSingle(),
        getAll('question_attempts','id,question_id,answer,correct,mode,answered_at',newUser.id),
        db.from('admin_users').select('user_id').eq('user_id',newUser.id).maybeSingle(),
        profilePromise
      ]);
      if(token!==initToken || user?.id!==newUser.id)return;
      if(s.error)throw s.error;
      if(adminR.error)throw adminR.error;
      if(profileR.error)throw profileR.error;
      admin=Boolean(adminR.data);
      const merged=mergeState(local,s.data,attempts);
      bridge.applyState(merged);
      localStorage.setItem(`petroprep_user_${newUser.id}_v2`,JSON.stringify(merged));
      status(newUser.user_metadata?.display_name||newUser.email?.split('@')[0]||'Minha conta');
      closeOverlay();
      await Promise.all([saveSettings(),syncAttempts()]);
    }catch(e){
      if(token!==initToken)return;
      status('Nuvem indisponível');
      notify(`Dados locais disponíveis, mas houve erro ao sincronizar: ${e.message||'tente novamente'}`);
    }
  }
  async function syncNow(){
    if(!user)return;
    setOverlay(`${title('Sincronização','Conferindo dados locais e da nuvem…')}<p class="cloud-muted">Processando histórico de questões.</p>`);
    try{
      const userId=user.id, local=currentState();
      const [s,attempts]=await Promise.all([
        db.from('user_settings').select('*').eq('user_id',userId).maybeSingle(),
        getAll('question_attempts','id,question_id,answer,correct,mode,answered_at',userId)
      ]);
      if(s.error)throw s.error;
      if(user?.id!==userId)return;
      bridge.applyState(mergeState(local,s.data,attempts));
      localStorage.setItem(`petroprep_user_${userId}_v2`,JSON.stringify(currentState()));
      await syncAttempts();await saveSettings();
      showAccount();notify('Sincronização concluída!');
    }catch(e){showAccount();notify('Falha na sincronização: '+e.message)}
  }
  function adminSummary(){
    const byUser=new Map();
    for(const r of adminRows){
      const obj=byUser.get(r.user_id)||{attempts:0,correct:0,wrong:0,last:null};
      obj.attempts++;
      if(r.correct===true)obj.correct++;
      if(r.correct===false)obj.wrong++;
      if(!obj.last||obj.last<r.answered_at)obj.last=r.answered_at;
      byUser.set(r.user_id,obj);
    }
    return adminProfiles.map(p=>({profile:p,...(byUser.get(p.id)||{attempts:0,correct:0,wrong:0,last:null})}));
  }
  async function showAdmin(){
    if(!user||!admin)return;
    setOverlay(`${title('Painel dos alunos','Carregando resultados individuais…')}<p class="cloud-muted">Os dados são visíveis somente para administradores.</p>`,true);
    try{
      const [p,rows]=await Promise.all([
        getAll('profiles','id,display_name,email,joined_at'),
        getAll('question_attempts','id,user_id,question_id,answer,correct,mode,answered_at')
      ]);
      adminRows=rows;adminProfiles=p;
      let people=adminSummary().sort((a,b)=>b.attempts-a.attempts);
      setOverlay(`${title('Painel dos alunos',`${people.length} contas · ${rows.length} tentativas registradas`)}
        <div class="cloud-scroll"><table class="cloud-table"><thead><tr><th>Aluno</th><th>Tentativas</th><th>Acertos</th><th>Erros</th><th>% de acerto</th><th>Última resposta</th></tr></thead><tbody>
        ${people.map(p=>`<tr class="selectable" data-cloud="student" data-student="${escape(p.profile.id)}"><td><strong>${escape(p.profile.display_name)}</strong><br>${escape(p.profile.email)}</td><td>${p.attempts}</td><td>${p.correct}</td><td>${p.wrong}</td><td>${p.correct+p.wrong?Math.round(p.correct/(p.correct+p.wrong)*100):'—'}</td><td>${p.last?new Date(p.last).toLocaleDateString('pt-BR'):'—'}</td></tr>`).join('')}
        </tbody></table></div><div class="cloud-actions"><button class="btn secondary small" data-cloud="export-csv">Exportar CSV</button><button class="btn outline small" data-cloud="account">Minha conta</button></div>`,true);
    }catch(e){setOverlay(`${title('Painel dos alunos','Não foi possível ler os registros.')}${message(e.message,true)}<button class="btn secondary" data-cloud="account">Voltar</button>`,true)}
  }
  function studentDetails(id){
    const p=adminProfiles.find(x=>x.id===id);if(!p)return;
    const list=adminRows.filter(x=>x.user_id===id).sort((a,b)=>String(b.answered_at).localeCompare(String(a.answered_at)));
    const contents=window.PetroPrep?.getContent().questions||[];
    const questionMap=new Map(contents.map(x=>[x.id,x]));
    setOverlay(`${title(escape(p.display_name),`${list.length} tentativas · ${escape(p.email)}`)}
      <div class="cloud-scroll"><table class="cloud-table"><thead><tr><th>Quando</th><th>Matéria / questão</th><th>Resposta</th><th>Resultado</th></tr></thead><tbody>
      ${list.slice(0,1000).map(r=>{const q=questionMap.get(r.question_id);return `<tr><td>${new Date(r.answered_at).toLocaleString('pt-BR')}</td><td><strong>${escape(r.question_id)}</strong> — ${escape(q?.text?.slice(0,90)||'Questão não disponível nesta versão')}</td><td>${r.answer===null?'Branco':r.answer?'Certo':'Errado'}</td><td class="cloud-check">${r.correct===null?'—':r.correct?'✓ Acerto':'✕ Erro'}</td></tr>`}).join('')}</tbody></table></div>
      <p class="cloud-top-note">Exibindo até 1.000 tentativas recentes. O CSV exporta o histórico completo carregado.</p>
      <div class="cloud-actions"><button class="btn secondary small" data-cloud="admin">← Voltar aos alunos</button></div>`,true);
  }
  function csvQuote(s){return '"'+String(s??'').replace(/"/g,'""')+'"'}
  function exportCsv(){
    const profiles=new Map(adminProfiles.map(x=>[x.id,x]));
    const rows=[['usuario','email','questao','resposta','resultado','modalidade','data'],...adminRows.map(r=>[
      profiles.get(r.user_id)?.display_name||'—',profiles.get(r.user_id)?.email||'—',r.question_id,
      r.answer===null?'Branco':r.answer?'Certo':'Errado',r.correct===null?'Branco':r.correct?'Acerto':'Erro',r.mode,r.answered_at
    ])];
    const csv='\ufeff'+rows.map(x=>x.map(csvQuote).join(';')).join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='petroprep-atividade-alunos.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  async function signOut(){
    clearTimeout(timer);
    if(user)await saveSettings();
    const {error}=await db.auth.signOut();
    if(error)notify(error.message);
    else{closeOverlay();notify('Você saiu da conta. Dados preservados na nuvem.')}
  }
  async function importOldProgress(){
    if(!user)return;
    let old;try{old=JSON.parse(localStorage.getItem('petroprep_estado_v1')||'null')}catch(e){notify('Backup anterior inválido.');return}
    if(!old||!Array.isArray(old.history)){notify('Não há progresso antigo compatível.');return}
    if(!confirm('Importar respostas e conteúdos do PetroPrep antigo para esta conta? O histórico atual será preservado.'))return;
    const local=currentState();
    const unified=mergeState({...local,
      read:unique([...(local.read||[]),...(old.read||[])]),
      bookmark:unique([...(local.bookmark||[]),...(old.bookmark||[])]),
      weeks:unique([...(local.weeks||[]),...(old.weeks||[])]),
      customTopics:mergeObjects(old.customTopics,local.customTopics),
      customQuestions:mergeObjects(old.customQuestions,local.customQuestions),
      history:[...(local.history||[]),...old.history.map(x=>({...x,attemptId:genId()}))]
    },null,[]);
    bridge.applyState(unified);
    localStorage.setItem(`petroprep_user_${user.id}_v2`,JSON.stringify(unified));
    try{await syncAttempts();await saveSettings();showAccount();notify('Progresso antigo importado!')}catch(e){notify('Importado localmente. Tente sincronizar mais tarde.')}
  }
  function clickOverlay(e){
    const button=e.target.closest('[data-cloud]');if(!button)return;
    const act=button.dataset.cloud;
    if(act==='close' && user)closeOverlay();
    if(act==='login-tab')showLogin('login');
    if(act==='register-tab')showLogin('register');
    if(act==='reset-password')resetPassword();
    if(act==='logout')signOut();
    if(act==='sync')syncNow();
    if(act==='account')showAccount();
    if(act==='admin')showAdmin();
    if(act==='student')studentDetails(button.dataset.student);
    if(act==='export-csv')exportCsv();
    if(act==='import-old')importOldProgress();
  }
  function init(appBridge){
    bridge=appBridge;
    showChecking();
    document.querySelector('#cloudAccount')?.addEventListener('click',showAccount);
    document.addEventListener('click',clickOverlay);
    document.addEventListener('submit',e=>{if(e.target.id==='cloudAuthForm')authSubmit(e)});
    if(!enabled){status('Login indisponível');showAuthUnavailable('O login ainda não está configurado.');return}
    if(!window.supabase?.createClient){status('Sem conexão');showAuthUnavailable('Não foi possível carregar o sistema de autenticação. Confira sua conexão.');return}
    try{db=window.supabase.createClient(cfg.url.replace(/\/$/,''),cfg.publishableKey)}catch(e){showAuthUnavailable('Falha ao inicializar o login: '+(e.message||'erro desconhecido'));return}
    bridge.setStorageKey('petroprep_local_visitante_v2');
    bridge.applyState(bridge.getLocalState());
    status('Entrar');
    db.auth.onAuthStateChange((event,session)=>{
      if(['INITIAL_SESSION','SIGNED_IN','SIGNED_OUT'].includes(event))setTimeout(()=>loadSession(session),0);
    });
    db.auth.getSession().then(({data,error})=>{
      if(error){showAuthUnavailable('Não foi possível verificar sua sessão. Atualize a página e tente novamente.')}
      else loadSession(data.session);
    }).catch(e=>{showAuthUnavailable('Falha ao verificar sessão: '+(e.message||'erro de rede'));});
    window.addEventListener('online',()=>{if(user){syncAttempts().then(()=>saveSettings()).catch(()=>{});}});
  }
  window.PetroCloud={init,isAuthenticated,persist,trackAnswer,resetAnswers,showAccount};
})();
