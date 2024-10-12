import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSectionComponent } from './icon-section.component';
import { By } from '@angular/platform-browser';
import { IconContainerComponent } from '../../Atoms/icon-container/icon-container.component';
import { IconWrapperComponent } from '../../Atoms/icon-wrapper/icon-wrapper.component';

describe('IconSectionComponent', () => {
  let component: IconSectionComponent;
  let fixture: ComponentFixture<IconSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSectionComponent], // El componente es standalone, se importa directamente
    }).compileComponents();

    fixture = TestBed.createComponent(IconSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render two IconContainerComponent instances', () => {
    fixture.detectChanges(); // Actualizamos la vista

    // Verificamos que existen dos instancias de IconContainerComponent
    const iconContainers = fixture.debugElement.queryAll(By.directive(IconContainerComponent));
    expect(iconContainers.length).toBe(2); // Se esperan dos instancias
  });

  it('should render two IconWrapperComponent instances', () => {
    fixture.detectChanges(); // Actualizamos la vista

    // Verificamos que existen dos instancias de IconWrapperComponent
    const iconWrappers = fixture.debugElement.queryAll(By.directive(IconWrapperComponent));
    expect(iconWrappers.length).toBe(4); // Se esperan dos instancias
  });

  it('should pass the correct iconSrc to IconContainerComponent', () => {
    fixture.detectChanges(); // Actualizamos la vista

    const iconContainers = fixture.debugElement.queryAll(By.directive(IconContainerComponent));

    // Verificamos el valor de iconSrc en ambas instancias de IconContainerComponent
    expect(iconContainers[0].componentInstance.iconSrc).toBe('/icons/addBoxFill.svg');
    expect(iconContainers[1].componentInstance.iconSrc).toBe('/icons/addBoxFill.svg');
  });

  it('should pass the correct iconSrc to IconWrapperComponent', () => {
    fixture.detectChanges(); // Actualizamos la vista

    const iconWrappers = fixture.debugElement.queryAll(By.directive(IconWrapperComponent));

    // Verificamos el valor de iconSrc en ambas instancias de IconWrapperComponent
    expect(iconWrappers[0].componentInstance.iconSrc).toBe('/icons/addBoxFill.svg');
    expect(iconWrappers[1].componentInstance.iconSrc).toBe('/icons/addBoxFill.svg');
  });
});
