import { Component, Input } from '@angular/core';
import { IconWrapperComponent } from "../icon-wrapper/icon-wrapper.component";

@Component({
  selector: 'app-icon-container',
  standalone: true,
  imports: [IconWrapperComponent],
  templateUrl: './icon-container.component.html',
  styleUrls: ['./icon-container.component.scss']
})
export class IconContainerComponent {

  @Input() iconSrc: string = '';

}
