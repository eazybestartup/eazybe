# PASTA ENUMS
Aqui nesta pasta devem ficar os enums do projeto.
Mais uma vez os enums deve estar separados por feature.
Temos, **como exemplo** a pasta login que contem os enums referentes ao login.
O padrão de nomenclatura do projeto é colocar enum.<feature>.js porque na hora de importar
fica mais fácil para lembrarmos o nome do arquivo.

# O que é um ENUM?
Enums são basicamentes constantes do projeto.
Vamos supor o seguinte: Estou trabalhando em uma tela de login e quando o login retorna 'LOGIN_SUCCESS'
da API eu realizo alguma ação.
se eu escrever, por exemplo:
```if(api === 'LOGIN_SUCCESS'){ ... }```
irá funcionar... mas perceba que eu usei o LOGIN_SUCCESS como string.
Se amanhã um outro dev do time for fazer uma operação relacionada ao sucesso do login e usar
```if(api === 'login_success'){ ... }```
teremos inconsistências no projeto. E agora, o padrão é minúsculo ou maiúsculo?

É por isso que temos o enum. o Enum exporta o valor PADRÃO da variável que a gente quer (no caso, login_success)
e aí todas as pessoas olham esse padrão, o que acaba com inconsistência entre flag de status e etc no projeto.

Como usaremos Redux, é importante que você entenda esse conceito.
Qualquer dúvida chama no zap.


# Referências
https://www.sohamkamani.com/blog/2017/08/21/enums-in-javascript/
http://blog.triadworks.com.br/enums-sao-mais-que-constantes (enums em Java)
