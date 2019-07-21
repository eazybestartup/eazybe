const texts = {
  "register:label:name": "Nome completo:",
  "register:label:birthDate": "Data de nascimento:",
  "register:label:sex": "Sexo:",
  "register:label:email":"E-mail:",
  "register:label:password":"Senha:",
  "register:label:password-confirmation":"Confirme a senha:",
  "register:btn:finish":"Cadastrar",
  "register:btn:avancar": "Avançar",
  "register:placeholder:name": "Digite seu nome completo",
  "register:placeholder:email":"Digite seu e-mail",
  "register:placeholder:password":"Digite sua senha",
  "register:placeholder:password-confirmation":"Confirme a senha",
  "register:title:navigation:stepOne":"Cadastro",
  "register:label:cep": "CEP:",
  "register:placeholder:cep": "Digite seu CEP",
  "register:label:address":"Endereço:",
  "register:label:number": "Número:",
  "register:label:district": "Bairro:",
  "register:label:cityAndUf": "Cidade/UF:",
  "register:label:complement": "Complemento",
  "register:label:invalid-email": "Insira um e-mail válido.",
  "register:label:min-len-password": "A senha deve conter no mínimo 8 caracteres.",
  "register:label:not-equal-password": "As senhas digitadas não são iguais.",
  "register:label:invalid-name": "Digite um nome válido.",
  "register:label:invalid-birthDate": "Escolha uma data de nascimento válida.",
  "register:label:invalid-userSex": "Escolha um sexo válido.",
  "register:label:invalid-cep": "Informe um CEP válido.",
  "register:label:unknown-error": "Houve um erro desconhecido. Tente novamente mais tarde.",
  "register:label:invalid-number": "Informe um número válido",
  "register:btn:login": "Login",
  "register:btn:cadastre-se": "Cadastre-se",
  "register:btn:editarImagem": "Editar imagem",
  "register:label:dadosUser": "Dados:",
  "register:btn:editarDados": "Editar"
};

export default getText = (key) => key ? texts[key] || 'Parâmetro não encontrado' : ''
