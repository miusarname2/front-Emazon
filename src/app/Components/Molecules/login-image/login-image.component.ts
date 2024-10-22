import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-image',
  standalone: true,
  templateUrl: './login-image.component.html',
  styleUrls: ['./login-image.component.scss']
})
export class LoginImageComponent {

  @Input() imageUrl: string = '';

}
