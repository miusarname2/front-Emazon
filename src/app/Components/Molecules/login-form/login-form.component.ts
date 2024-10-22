import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConnectApiService } from 'src/app/Services/connect-api.service';
import { AuthorizationModel } from 'src/app/Types/AuthorizationModel';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public readonly loginData = new FormGroup({
    username: new FormControl(''),
    passwd: new FormControl('')
  });

  constructor(private readonly apiService: ConnectApiService) { }

  login(): void {
    console.log(this.loginData.value);
    this.apiService.autenticate(this.loginData.value.username ? this.loginData.value.username : '', this.loginData.value.passwd ? this.loginData.value.passwd : '').subscribe((response: AuthorizationModel) => {
      this.loginData.reset();
      if (response.jwt) {
        localStorage.setItem('authenticated', '1');
        let expirationTime = new Date()
        expirationTime.setMinutes(expirationTime.getMinutes() + 30);
        localStorage.setItem('beforeAt', expirationTime.toString());
      }
    });
  }

}
