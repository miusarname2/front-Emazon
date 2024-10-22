import { Component } from '@angular/core';
import { LoginImageComponent } from "../../Molecules/login-image/login-image.component";
import { LoginFormComponent } from "../../Molecules/login-form/login-form.component";

@Component({
  selector: 'app-template-login',
  standalone: true,
  templateUrl: './template-login.component.html',
  styleUrls: ['./template-login.component.scss'],
  imports: [LoginImageComponent, LoginFormComponent]
})
export class TemplateLoginComponent {

  

}
