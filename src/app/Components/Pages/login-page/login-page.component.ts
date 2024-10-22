import { Component, OnInit } from '@angular/core';
import { TemplateLoginComponent } from "../../templates/template-login/template-login.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [TemplateLoginComponent]
})
export class LoginPageComponent {


}
