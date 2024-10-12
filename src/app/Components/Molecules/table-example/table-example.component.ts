import { Component } from '@angular/core';

@Component({
  selector: 'app-table-example',
  standalone: true,
  imports: [],
  templateUrl: './table-example.component.html',
  styleUrl: './table-example.component.scss'
})
export class TableExampleComponent {

  public onResizeStart(e:MouseEvent):void{
    console.log('Resize started');
    console.log(e.target); 
  }

}
