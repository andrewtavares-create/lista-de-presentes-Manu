# Lista de Presentes da Manu 🎁

Site onde a Manu adiciona o que ela quer ganhar de presente — com nome, link e valor — e o Andrew acessa tudo pelo painel admin.

---

## Como configurar (passo a passo)

### 1. Criar conta no Supabase (banco de dados grátis)

1. Acesse **https://supabase.com** e crie uma conta gratuita
2. Clique em **"New Project"**, escolha um nome (ex: `lista-manu`) e uma senha
3. Aguarde o projeto ser criado (~1 minuto)

### 2. Criar a tabela no banco de dados

1. No painel do Supabase, vá em **"SQL Editor"** (menu lateral)
2. Cole o código abaixo e clique em **"Run"**:

```sql
create table presentes (
  id         bigint generated always as identity primary key,
  nome       text        not null,
  link       text,
  valor      numeric     not null,
  criado_em  timestamptz not null default now()
);

-- Permite leitura e escrita pública (sem precisar de login)
alter table presentes enable row level security;

create policy "leitura publica"
  on presentes for select using (true);

create policy "escrita publica"
  on presentes for insert with check (true);

create policy "deletar admin"
  on presentes for delete using (true);
```

### 3. Pegar as credenciais

1. No painel do Supabase, vá em **Settings → API**
2. Copie:
   - **Project URL** → `https://xxxxxxxx.supabase.co`
   - **anon public** (em "Project API Keys")

### 4. Configurar o site

Abra o arquivo `config.js` e preencha:

```js
supabase: {
  url: "https://xxxxxxxx.supabase.co",   // cole sua URL aqui
  anonKey: "eyJhbGci...",                // cole sua chave anon aqui
},
admin: {
  senha: "sua-senha-secreta",            // troque por uma senha só sua
},
```

### 5. Publicar no GitHub Pages

1. Suba os arquivos para o repositório no GitHub
2. Vá em **Settings → Pages** do repositório
3. Em "Source", escolha **"main branch"** e clique em **Save**
4. Seu site estará em `https://andrewtavares-create.github.io/lista-de-presentes-Manu/`

---

## Como usar

| Página | URL | Quem usa |
|--------|-----|---------|
| Lista principal | `/index.html` | Manu — adiciona desejos |
| Painel admin | `/admin.html` | Andrew — vê tudo com senha |

---

## Arquivos

```
index.html   → página da Manu
admin.html   → painel do Andrew (protegido por senha)
config.js    → configurações (Supabase + senha)
```
