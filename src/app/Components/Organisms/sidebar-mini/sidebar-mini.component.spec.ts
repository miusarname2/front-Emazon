import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMiniComponent } from './sidebar-mini.component';
import { By } from '@angular/platform-browser';
import { IconWrapperComponent } from '../../Atoms/icon-wrapper/icon-wrapper.component';
import { IconSectionComponent } from '../../Molecules/icon-section/icon-section.component';

describe('SidebarMiniComponent', () => {
  let component: SidebarMiniComponent;
  let fixture: ComponentFixture<SidebarMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMiniComponent], // El componente es standalone, se importa directamente
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMiniComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the IconWrapperComponent in the top section', () => {
    fixture.detectChanges(); // Actualizamos la vista

    const iconWrapper = fixture.debugElement.query(By.directive(IconWrapperComponent));
    expect(iconWrapper).toBeTruthy(); // Verifica que existe la instancia de IconWrapperComponent
    expect(iconWrapper.componentInstance.iconSrc).toBe('/icons/addBoxFill.svg'); // Verifica el iconSrc
  });

  it('should render two IconSectionComponent instances', () => {
    fixture.detectChanges(); // Actualizamos la vista

    const iconSections = fixture.debugElement.queryAll(By.directive(IconSectionComponent));
    expect(iconSections.length).toBe(2); // Verifica que hay dos instancias de IconSectionComponent
  });

  it('should render a divider between the two sections', () => {
    fixture.detectChanges(); // Actualizamos la vista

    const divider = fixture.debugElement.query(By.css('.divider'));
    expect(divider).toBeTruthy(); // Verifica que existe el divisor
  });
});
