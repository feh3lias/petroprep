# PetroPrep Cloud 2.0 — portal de estudos multiusuário

Continuação do PetroPrep original. O projeto mantém **38 módulos, 63 questões autorais**, aulas, simulados, plano de estudos e caderno de erros, agora com uma camada de autenticação e persistência na nuvem.

**Estado atual:** o site e o banco de dados estão **prontos para configuração**, mas **não estão hospedados nem conectados a um projeto Supabase**. O arquivo `config.js` vem propositalmente sem valores. Para testar o visual e as questões sem conta, abra `PetroPrep_PREVIA.html` (no ZIP); o progresso fica no navegador enquanto não houver conexão.

## Arquitetura

- Frontend estático: `index.html`, `styles.css`, `app.js`, `conteudo.js`, `cloud.js` e `config.js`.
- Autenticação: Supabase Auth (email + senha; confirmação por email se habilitada no Supabase).
- Banco PostgreSQL: tabela `question_attempts` (cada tentativa separada), `user_settings` (aulas, favoritos, semanas e conteúdo personalizado), `profiles` (nome e email), `admin_users` (lista fechada de administradores).
- Segurança: Row Level Security. Usuários só veem e alteram seus próprios dados; administradores podem ler dados dos outros, mas não escrever por eles. A atribuição de administrador requer acesso ao SQL Editor.
- Hospedagem: GitHub Pages. Nenhum servidor Node necessário.

## Passo a passo — colocar online

### 1. Criar o banco Supabase

1. Entre em https://supabase.com e crie um projeto (o plano disponível pode variar).
2. Acesse **SQL Editor**, cole todo o arquivo `schema.sql` e execute (**Run**).
3. Vá em **Project Settings / API Keys** (ou seção equivalente) e copie a **Project URL** (`https://...supabase.co`) e a **publishable key** (`sb_publishable_...`). Em projetos antigos pode haver uma **anon key**. **NUNCA copie a secret key, service_role key nem a senha do banco para arquivos do site ou repositórios GitHub.**
4. Abra `config.js` e preencha exatamente:

   ```js
   window.PETROPREP_CONFIG = {
     url: 'https://ID-DO-SEU-PROJETO.supabase.co',
     publishableKey: 'sb_publishable_SUA_CHAVE_PUBLICA'
   };
   ```

5. Em **Authentication → Providers → Email**, mantenha Email habilitado; escolha se exige confirmação do email. **Recomendado: exigir confirmação.**

### 2. Publicar no GitHub Pages

1. Crie um repositório GitHub público, por exemplo `petroprep`.
2. Envie os arquivos `index.html`, `styles.css`, `app.js`, `conteudo.js`, `cloud.js`, `config.js`, `.nojekyll` para a raiz. Opcionalmente envie `conteudo.json` e `exemplo_pacote.json`. **Não é necessário publicar `schema.sql`, embora ele não contenha senha.**
3. No repositório, vá em **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)** e salve.
4. A URL será algo como `https://SEU-USUARIO.github.io/petroprep/`.
5. No Supabase, em **Authentication → URL Configuration**, defina **Site URL** para essa URL exata e adicione a mesma URL em **Redirect URLs**. Isso é necessário para links de confirmação e recuperação de senha.
6. Abra o endereço público, clique em **Entrar → Cadastrar**, use um email válido, confirme o email quando solicitado e entre.

> Publique em HTTPS. Para usar autenticação de verdade, utilize o site hospedado (não `file://`). Após editar as chaves, publique o `config.js` atualizado.

Documentações:
- Supabase Auth: https://supabase.com/docs/guides/auth/passwords
- RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### 3. Tornar sua conta administradora

Após criar e confirmar sua conta, abra o Supabase em **Authentication → Users**, copie seu `User UID` (UUID), e execute no **SQL Editor**:

```sql
insert into public.admin_users (user_id)
values ('COLE-AQUI-SEU-USER-UUID');
```

Recarregue o site e entre novamente. Clique no botão da sua conta (canto superior direito) e em **Painel de alunos**. Você poderá ver pessoas cadastradas, total de tentativas, acertos, erros, taxa de acerto e data da última resposta; clicando no aluno, poderá ler as questões que ele respondeu, sua marcação e o resultado. Há exportação do histórico em CSV.

**Importante:** apenas quem possui acesso de administrador ao Supabase pode inserir outros administradores nessa tabela. Não disponibilize uma chave de serviço no navegador.

### 4. Testar 2 contas

1. Crie duas contas com emails diferentes (pode usar navegadores diferentes).
2. Entre com a primeira, responda 2 questões e marque uma aula como estudada.
3. Recarregue a página e verifique se o histórico permanece.
4. Entre com a segunda conta: o progresso deve começar independente.
5. Entre como administradora, acesse **Painel de alunos** e confira as respostas separadas.
6. Na primeira conta, entre em outro dispositivo e confirme a sincronização após atualizar a página.

## Editar questões futuramente

- Os módulos e questões do site ficam em `conteudo.js`. **Mantenha os IDs existentes**, para preservar o vínculo com o histórico já registrado.
- Para acrescentar questões para **todos os usuários**, atualize `conteudo.js` e envie a nova versão ao GitHub. Você pode pedir ao ChatGPT: “Edite o ZIP do PetroPrep Cloud e adicione 50 questões de Fluidos, sem mudar IDs existentes”.
- Questões adicionadas no painel **Gerenciar conteúdo** ficam **pessoais na conta de quem as criou**; para distribuir a todos, incorpore-as ao `conteudo.js` publicado.
- Aulas e explicações são sínteses originais, não cópias integrais de livros comerciais.

## Progresso antigo e importação

No site original, os dados ficavam na chave `petroprep_estado_v1` do armazenamento do navegador. Se você publicar num **novo domínio**, esse armazenamento não acompanha a mudança. Antes de mudar de endereço, use **Gerenciar conteúdo → Salvar backup** no site antigo. No novo, entre na sua conta, use **Restaurar backup** e depois **Sincronizar agora** no menu de conta.

Se você configurar a nuvem no **mesmo domínio** onde já usava a versão 1, aparecerá a opção **Importar progresso antigo** no menu da conta, caso exista histórico local. A importação é opcional e preserva as tentativas anteriores.

## Observações

- O projeto usa o formato de Certo/Errado do edital da Petrobras 2021/2022. Futuras provas podem mudar formato e conteúdo.
- O painel administrativo permite a visualização de **resultados de estudo**, não substitui uma plataforma de prova antifraude. Pontuação e correção são calculadas no cliente, logo usuários tecnicamente avançados poderiam alterar seus registros.
- Respostas são armazenadas também localmente para permitir reenvio em caso de queda da rede; a sincronização entre dispositivos ocorre ao entrar ou ao clicar em **Sincronizar agora**. Não há sincronização instantânea em tempo real entre sessões abertas simultaneamente.
- Para evitar desgaste de quotas ou custo inesperado, acompanhe o uso no painel do Supabase se o projeto se popularizar.
