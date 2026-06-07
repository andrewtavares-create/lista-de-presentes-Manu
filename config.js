// ============================================================
//  CONFIGURAÇÃO - preencha com seus dados do Supabase!
//  Veja o README.md para instruções de como criar a conta.
// ============================================================

const CONFIG = {

  // --- SUPABASE (banco de dados) ---
  supabase: {
    url: "COLE_AQUI_SUA_URL_DO_SUPABASE",       // ex: https://xyzxyz.supabase.co
    anonKey: "COLE_AQUI_SUA_CHAVE_ANON",        // chave "anon public" do Supabase
  },

  // --- ADMIN (página de Andrew) ---
  admin: {
    senha: "andrew123",   // troque por uma senha que só você sabe
  },

  // --- TEXTOS DO SITE ---
  textos: {
    titulo: "Lista de Desejos da Manu 🎁",
    subtitulo: "Me conta o que você quer que eu te dê de presente!",
    tituloAdmin: "Lista de Presentes da Manu",
  },
};
