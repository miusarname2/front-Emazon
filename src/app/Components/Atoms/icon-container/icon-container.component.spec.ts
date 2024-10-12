import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconContainerComponent } from './icon-container.component';
import { By } from '@angular/platform-browser';

describe('IconContainerComponent', () => {
  let component: IconContainerComponent;
  let fixture: ComponentFixture<IconContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the icon with the correct src', () => {
    const testIconSrc = 'assets/icons/test-icon.svg';
    component.iconSrc = testIconSrc;

    fixture.detectChanges();

    const iconWrapperEl = fixture.debugElement.query(By.css('app-icon-wrapper'));

    expect(iconWrapperEl.componentInstance.iconSrc).toBe(testIconSrc);
  });

  it('should render the notification dot', () => {
    fixture.detectChanges();

    const notificationDotEl = fixture.debugElement.query(By.css('.notification-dot'));

    expect(notificationDotEl).toBeTruthy();

    const styles = window.getComputedStyle(notificationDotEl.nativeElement);
    expect(styles.display).toBe('block'); 
    expect(styles.visibility).toBe('visible');
  });
});