import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './icon-wrapper.component.html',
  styleUrl: './icon-wrapper.component.scss'
})
export class IconWrapperComponent {

  @Input() iconSrc: string = '';

}
