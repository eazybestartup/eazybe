# EazyBe

## EditorConfig
EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.
https://editorconfig.org/
https://github.com/facebook/react-native/blob/master/.editorconfig

To work with editor config you should have a .editorconfig file on root folder of your project and install EditorConfig
plugin in your IDE.


### Rodar o projeto:
Na pasta do projeto:
1. Instale as dependências ```npm i```.
2. Conecte seu celular no computador. 
3. Abra um cmd e execute: 
```
npm run start
```
Isso irá rodar o bundle do react-native. Esse cmd deverá ficar aberto durante o desenvolvimento. Caso contrário não dá para
codificar. Esse comando é personalizado e limpa o cache toda vez que você o roda.

2. Em outro cmd execute:
```
npm run app-android
```
ou 
```
npm run app-ios
```
Essa segunda aba poderá ser fechada após o comando ser executado.

### Debugger
O debugger que uso se chama [Reactotron](https://github.com/infinitered/reactotron). Podemos instalar e configurar outro caso vejamos a necessidade. O debugger roda na porta 9090.

Instruções para configurá-lo na sua máquina:
1. Baixe-o [aqui](https://github.com/infinitered/reactotron/blob/master/docs/installing.md).
2. Abra-o antes de rodar o projeto.
3. Entre na pasta platform-tools do seu sdk do Android (A minha fica em C:\Users\LucasMunizDutra\AppData\Local\Android\Sdk\platform-tools) e abra um terminal. Lá digite: ```./adb.exe reverse tcp:9090 tcp:9090```
4. Rode o projeto. Entre na aba _Timeline_. Lá contém todas as actions disparadas, chamadas de API e etc.

### Sobre o padrão de organização
Existem pastas de alto nível (assets, enum, models, services, state, ui, ui/components e ui/screens, utils). Quando fomos criar algo, devemos criar dentro dessas pastas referenciando o módulo delas. 

Exemplo:

Quero criar uma tela de cadastro, logo, o arquivo Cadastro.js deve ficar em ui/screens/register/Cadastro.js.

Quero criar um componente de data e hora para o feed de noticias, logo, o arquivo dataHora.js deve ficar em ui/components/feed/dataHora/dataHora.js

**Qualquer dúvida pergunte no grupo que a gente responde**.

**Ter esse tipo de organização é muito importante para o código não virar uma bagunça e não ficarmos loucos a longo prazo**.

E qualquer coisa podemos mudar esse padrão também, sem problemas. Contanto que o código não vire uma zona eu não vejo nenhum problema em alterar as coisas.

### Sobre o padrão de tasks e adição de novas features
Como temos mais de duas pessoas programando, acho legal trabalharmos com feature branch no git. A ideia é a seguinte:
1. Crie uma branch de feature a partir da master. Neste exemplo vou usar a feature de criar um componente com data e hora: ```git checkout -b dataAndHourComponent```. O git checkout -b cria uma branch e entra nessa branch.
2. Dentro da branch criada você faz os commits, quantos forem necessários.
3. Depois disso, você abre um Pull Request de merge pra master. Aí alguém analisa seu código e mergeia. Esse passo pode ser feito na interface do GitHub se não me engano.

**Qualquer dúvida pergunte no grupo que a gente responde**.

Esse [site](https://br.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) explica muito bem o conceito: 
