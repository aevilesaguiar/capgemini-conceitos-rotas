# Start By Capgemini - Angular - Rotas

## O que é uma Rota?

É um carregamento dinâmico de páginas. As rotas executam uma pagina,ela abre a página, mas não existe o loading
é tudo em tempo real. Eu posso clicar em um link, se esse link for uma rota, ele abre automaticamente, sem que
faça com que o browser atualize a página, isso garante que o sistema em angular seja muito rápido.

Quando você trabalha com rotas no angular é criado um novo componente chamado:app-routing.module. No nosso html aparece uma nova tag '<router-outlet></router-outlet>' esse componente é a exibição dos componentes, nesse
caso o sobre e inicio que foi criado.

## Implementando Rotas

Acessar o arquivo app-routing.module.ts , todas as páginas que queremos que estejam em rotas nós seguimos o padrão a baixo:

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'sobre', component: SobreComponent}

];

*path é o nome da rota, ou seja o nome que eu inclui no routerLink="/inicio" *

As boas práticas do Angular indicam utilizarmos aspas simples e não duplas.

Se por acaso removermos a rota da url, aparece uma pagina em branco, para resolver esse problemas  criamos 
uma rota vazia , redirecionamos, e incluo um pathMatch. O pathMatch é mais um desses atributos, ele serve para verificar o caminho, e pode receber o valor 'prefix' (por default recebe esse valor) ou 'full', como no nosso caso.

**essa é uma rota padrão**

const routes: Routes = [
  { path:'inicio', component: InicioComponent},
  {path:'sobre', component: SobreComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'}

];

## Rotas de Erro

Para criar uma rota de erro é necessário criar um component e incluir a rota semelhantes fizemos nos outros 
componentes.
Em Angular '**' quer dizer que não tem a url correspondente ao componente.

const routes: Routes = [
  { path:'inicio', component: InicioComponent},
  {path:'sobre', component: SobreComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'**',component: Error404Component} <-
];

## Função Guard

Para fechar nosso assunto de rotas, temos a possibilidade de criar guardas, que permitem ou não o acesso a determinadas rotas.

Estas guardas são cumulativas, ou seja, você pode ter vários arquivos de guardas, e todos eles seguem um mesmo padrão, implementam CanActivate e tem um método apenas, chamado também CanActivate, que retorna verdadeiro ou falso, informando se o usuário pode ou não chegar a esta página.

a implementação na rota fica dessa forma:

const routes: Routes = [
  { path:'inicio', component: InicioComponent},
 ** {path:'sobre', component: SobreComponent, canActivate:[AuthGuard]}, <-**
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'**',component: Error404Component}

];

O arquivo auth.guard também é implementado:


export class AuthGuard implements CanActivate {
  //variavel de acesso
  acesso:boolean=false;//não terá acesso se for false, só teremos acesso a essa rota se for true <--

  //método
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.acesso; <---
  }
  




A função Guard essa função serve para você basicamente salvar as suas rotas, e não deixar que elas
fiquem expostas; Ou seja dependendo se a função é true ou false podemos ter acesso a página;

através do comando ng g g Auth  -> geramos o auth.guard

![image](https://user-images.githubusercontent.com/52088444/169629203-3e5f46a8-039f-4147-9e35-7a4bb239496b.png)


## Implementado o Bootstrap

O bootstrap foi criado pelo o twiter para que desenvolvedores possam ter os complementos web como botões,
fomulários, abas e etc de maneira muito simples. Uma estrutura ampla e de fácil acesso.

O Angular utiliza o jQuery, mas não é indicada, ele indica usar o typescript.

A npm disponibiliza a instalaçaõ do boortrap sem que você tenha que baixar do site oficial.

npm i bootstrap

A instalação ficará na página node_modules. Temos que incluir o path do bootstrap, no arquivo angular.json

  "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",<-
              "src/styles.css"


## Bootstrap de efeitos específicos do angular

- https://ng-bootstrap.github.io/#/home

- ng add @ng-bootstrap/ng-bootstrap


