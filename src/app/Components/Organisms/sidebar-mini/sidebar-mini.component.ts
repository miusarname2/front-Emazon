import { Component } from '@angular/core';
import { IconWrapperComponent } from "../../Atoms/icon-wrapper/icon-wrapper.component";
import { IconSectionComponent } from "../../Molecules/icon-section/icon-section.component";

@Component({
  selector: 'app-sidebar-mini',
  standalone: true,
  imports: [IconWrapperComponent, IconSectionComponent],
  templateUrl: './sidebar-mini.component.html',
  styleUrls: ['./sidebar-mini.component.scss']
})
export class SidebarMiniComponent {

}
