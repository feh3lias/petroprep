# PetroPrep — Engenharia de Petróleo

Portal de estudos para concursos Petrobras, com trilhas de conteúdos, questões de Certo/Errado, simulados e histórico de desempenho.

## Publicação do site

Os arquivos da aplicação estão no pacote `PetroPrep_Cloud_2_0.zip` entregue nesta conversa. Para publicar:

1. Baixe e extraia o ZIP.
2. No GitHub, abra este repositório e clique em **Add file > Upload files**.
3. Envie **os arquivos extraídos** para a raiz do repositório (incluindo `index.html`, `app.js`, `cloud.js`, `conteudo.js`, `styles.css` e `config.js`), não o ZIP.
4. Em **Settings > Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
5. Para autenticação: crie um projeto no Supabase, execute `schema.sql` no SQL Editor e insira apenas a URL e a chave **publishable/anon pública** no `config.js`. Nunca publique `service_role` ou `secret`.
6. Configure a URL pública e os redirecionamentos autorizados em **Supabase > Authentication > URL Configuration**.

## Estado
Repositório iniciado; a aplicação ainda precisa ser enviada e configurada para entrar no ar.

Projeto educacional independente; não afiliado à Petrobras.
