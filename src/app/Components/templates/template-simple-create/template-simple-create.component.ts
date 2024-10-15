import { Component, Input } from '@angular/core';
import { SidebarMiniComponent } from "../../Organisms/sidebar-mini/sidebar-mini.component";
import { BasicFormComponent } from "../../Molecules/basic-form/basic-form.component";
import { TableExampleComponent } from "../../Molecules/table-example/table-example.component";

@Component({
  selector: 'app-template-simple-create',
  standalone: true,
  imports: [SidebarMiniComponent, BasicFormComponent, TableExampleComponent],
  templateUrl: './template-simple-create.component.html',
  styleUrls: ['./template-simple-create.component.scss']
})
export class TemplateSimpleCreateComponent {

  @Input() title: string = '';
  @Input() buttonText: string = 'Crear';
  @Input() placeholder: string = 'Crear Nueva Categoria1';
  @Input() endpoint: string = 'marca';

}
