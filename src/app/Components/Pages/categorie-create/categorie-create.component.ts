import { Component, Input, SimpleChanges } from '@angular/core';
import { BasicFormComponent } from "../../Molecules/basic-form/basic-form.component";
import { IconSectionComponent } from "../../Molecules/icon-section/icon-section.component";
import { IconWrapperComponent } from "../../Atoms/icon-wrapper/icon-wrapper.component";
import { SidebarMiniComponent } from "../../Organisms/sidebar-mini/sidebar-mini.component";
import { TemplateSimpleCreateComponent } from "../../templates/template-simple-create/template-simple-create.component";

@Component({
  selector: 'app-categorie-create',
  standalone: true,
  imports: [BasicFormComponent, IconSectionComponent, IconWrapperComponent, SidebarMiniComponent, TemplateSimpleCreateComponent],
  templateUrl: './categorie-create.component.html',
  styleUrl: './categorie-create.component.scss'
})
export class CategorieCreateComponent {


}
