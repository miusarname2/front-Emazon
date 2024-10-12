import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {

  @Input() public endOfPlaceHolder: string = '';
  @Input() public sendButtonText: string = '';
  public placeHolderFirst: string = 'Nombre de ';

  // Se ejecuta cada vez que cambia el valor del input
  ngOnChanges(changes: SimpleChanges) {
    if (changes['endOfPlaceHolder']) {
      // Actualiza el placeholder en cuanto cambia el valor de endOfPlaceHolder
      this.placeHolderFirst = 'Nombre de ' + this.endOfPlaceHolder;
    }
  }
}
