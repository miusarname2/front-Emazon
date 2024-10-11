import { Component } from '@angular/core';
import { IconContainerComponent } from "../../Atoms/icon-container/icon-container.component";
import { IconWrapperComponent } from "../../Atoms/icon-wrapper/icon-wrapper.component";

@Component({
  selector: 'app-icon-section',
  standalone: true,
  imports: [IconContainerComponent, IconWrapperComponent],
  templateUrl: './icon-section.component.html',
  styleUrl: './icon-section.component.scss'
})
export class IconSectionComponent {

}
