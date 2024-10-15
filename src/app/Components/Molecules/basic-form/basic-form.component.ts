import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConnectApiService } from 'src/app/Services/connect-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {

  @Input() public endOfPlaceHolder: string = '';
  @Input() public sendButtonText: string = '';
  public placeHolderFirst: string = 'Nombre de ';
  @Input() public endpoint: string = '';
  public readonly datosFormulario = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private readonly apiService: ConnectApiService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['endOfPlaceHolder']) {
      this.placeHolderFirst = 'Nombre de ' + this.endOfPlaceHolder;
    }
  }

  SendFormHandler(): void {
    const formData = this.datosFormulario.value;
    const newFormData = {
      nombre: formData.name,
      descripcion: formData.description
    }
    this.apiService.endpoint = this.endpoint;
    this.apiService.autenticate(environment.username, environment.password).subscribe((response: object) => {
      console.log(response);
      this.apiService.postData(newFormData).subscribe((response: object) => {
        this.datosFormulario.reset();
        alert('Formulario enviado correctamente');
      });
    });
  }

}