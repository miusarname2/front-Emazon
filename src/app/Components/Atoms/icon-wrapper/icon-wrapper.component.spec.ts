import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconWrapperComponent } from './icon-wrapper.component';
import { By } from '@angular/platform-browser';

describe('IconWrapperComponent', () => {
  let component: IconWrapperComponent;
  let fixture: ComponentFixture<IconWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconWrapperComponent], // Cambia declarations a imports
    }).compileComponents();

    fixture = TestBed.createComponent(IconWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with the correct src attribute', () => {
    const iconSrc = 'assets/icons/test-icon.svg';
    component.iconSrc = iconSrc;
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.getAttribute('src')).toBe(iconSrc);
  });

  it('should apply correct color to icon', () => {
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();

    const svgPath = fixture.debugElement.query(By.css('.svg-path'));
    if (svgPath) {
      const fillStyle = window.getComputedStyle(svgPath.nativeElement).fill;
      expect(fillStyle).toBe('rgb(255, 255, 255)'); // Blanco
    }
  });
});