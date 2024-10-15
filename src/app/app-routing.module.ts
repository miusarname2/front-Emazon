import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieCreateComponent } from './Components/Pages/categorie-create/categorie-create.component';
import { MarcaComponent } from './Components/Pages/marca/marca.component';

const routes: Routes =
  [
    { path: 'categoria', component: CategorieCreateComponent },
    { path: 'marca', component: MarcaComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
