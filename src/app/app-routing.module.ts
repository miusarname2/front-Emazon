import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieCreateComponent } from './Components/Pages/categorie-create/categorie-create.component';
import { MarcaComponent } from './Components/Pages/marca/marca.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';

const routes: Routes =
  [
    { path: 'categoria', component: CategorieCreateComponent },
    { path: 'marca', component: MarcaComponent },
    { path: 'login', component: LoginPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
