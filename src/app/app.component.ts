import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategorieCreateComponent } from "./Components/Pages/categorie-create/categorie-create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategorieCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-Emazon';
}
