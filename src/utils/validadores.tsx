export const validarEmail = (email: string): boolean => {
  return email.includes('@') && email.includes('.');
}

export const validarSenha = (senha: string): boolean => {
  return senha.length >= 8 && senha.length <= 32;
}