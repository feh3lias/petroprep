-- PetroPrep — execute uma única vez no SQL Editor do Supabase.
-- Segurança: cada usuário gerencia suas próprias respostas; administradores têm leitura agregada.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Estudante' check (char_length(display_name) between 1 and 80),
  email text not null default '' check (char_length(email) <= 254),
  joined_at timestamptz not null default now()
);

create table if not exists public.user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  read_topics jsonb not null default '[]'::jsonb,
  bookmarks jsonb not null default '[]'::jsonb,
  finished_weeks jsonb not null default '[]'::jsonb,
  custom_topics jsonb not null default '[]'::jsonb,
  custom_questions jsonb not null default '[]'::jsonb,
  theme text not null default 'light' check (theme in ('light','dark')),
  updated_at timestamptz not null default now()
);

create table if not exists public.question_attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null check (char_length(question_id) between 1 and 120),
  answer boolean,
  correct boolean,
  mode text not null default 'practice' check (mode in ('practice','mock')),
  answered_at timestamptz not null default now(),
  constraint attempt_blank_consistency check (
    (answer is null and correct is null) or (answer is not null and correct is not null)
  )
);

create index if not exists attempts_user_at on public.question_attempts (user_id, answered_at desc);
create index if not exists attempts_question on public.question_attempts (question_id);

alter table public.admin_users enable row level security;
alter table public.profiles enable row level security;
alter table public.user_settings enable row level security;
alter table public.question_attempts enable row level security;

revoke all on public.admin_users, public.profiles, public.user_settings, public.question_attempts from anon, authenticated;
grant select on public.admin_users to authenticated;
grant select, insert, update on public.profiles, public.user_settings to authenticated;
grant select, insert, delete on public.question_attempts to authenticated;

-- Apenas o SQL Editor ou uma chave de serviço fora do navegador pode cadastrar administradores.
create policy "self read admin membership" on public.admin_users
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "read self or admin profiles" on public.profiles
  for select to authenticated using (
    id = (select auth.uid()) or exists (
      select 1 from public.admin_users a where a.user_id = (select auth.uid())
    )
  );
create policy "insert own profile" on public.profiles
  for insert to authenticated with check (id = (select auth.uid()));
create policy "update own profile" on public.profiles
  for update to authenticated using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

create policy "read own settings or admin" on public.user_settings
  for select to authenticated using (
    user_id = (select auth.uid()) or exists (
      select 1 from public.admin_users a where a.user_id = (select auth.uid())
    )
  );
create policy "insert own settings" on public.user_settings
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy "update own settings" on public.user_settings
  for update to authenticated using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

create policy "read own attempts or admin" on public.question_attempts
  for select to authenticated using (
    user_id = (select auth.uid()) or exists (
      select 1 from public.admin_users a where a.user_id = (select auth.uid())
    )
  );
create policy "insert own attempts" on public.question_attempts
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy "delete own attempts" on public.question_attempts
  for delete to authenticated using (user_id = (select auth.uid()));

-- DEPOIS que sua conta tiver sido criada e o e-mail confirmado, copie seu UUID
-- em Authentication > Users e execute separadamente (substitua o UUID):
-- insert into public.admin_users (user_id) values ('SEU-UUID-AQUI');
