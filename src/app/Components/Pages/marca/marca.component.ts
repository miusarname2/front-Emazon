import { Component, OnInit } from '@angular/core';
import { TemplateSimpleCreateComponent } from '../../templates/template-simple-create/template-simple-create.component';
import { SidebarMiniComponent } from '../../Organisms/sidebar-mini/sidebar-mini.component';
import { IconWrapperComponent } from '../../Atoms/icon-wrapper/icon-wrapper.component';
import { IconSectionComponent } from '../../Molecules/icon-section/icon-section.component';
import { BasicFormComponent } from '../../Molecules/basic-form/basic-form.component';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [BasicFormComponent, IconSectionComponent, IconWrapperComponent, SidebarMiniComponent, TemplateSimpleCreateComponent],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.sass']
})
export class MarcaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
