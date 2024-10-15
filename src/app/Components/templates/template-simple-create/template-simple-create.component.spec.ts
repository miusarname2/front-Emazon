import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateSimpleCreateComponent } from './template-simple-create.component';
import { By } from '@angular/platform-browser';
import { SidebarMiniComponent } from '../../Organisms/sidebar-mini/sidebar-mini.component';
import { BasicFormComponent } from '../../Molecules/basic-form/basic-form.component';
import { TableExampleComponent } from '../../Molecules/table-example/table-example.component';

describe('TemplateSimpleCreateComponent', () => {
  let component: TemplateSimpleCreateComponent;
  let fixture: ComponentFixture<TemplateSimpleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSimpleCreateComponent], // El componente es standalone, se importa directamente
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSimpleCreateComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the SidebarMiniComponent', () => {
    fixture.detectChanges(); // Actualiza la vista

    const sidebar = fixture.debugElement.query(By.directive(SidebarMiniComponent));
    expect(sidebar).toBeTruthy(); // Verifica que existe la instancia de SidebarMiniComponent
  });

  it('should display the correct title', () => {
    component.title = 'Test Title'; // Asigna un valor al título
    fixture.detectChanges(); // Actualiza la vista

    const titleElement: HTMLElement = fixture.debugElement.query(By.css('.form-title')).nativeElement;
    expect(titleElement.textContent).toContain('Test Title'); // Verifica que el título se muestra correctamente
  });

  it('should render the BasicFormComponent with correct inputs', () => {
    component.placeholder = 'Test Placeholder'; // Asigna un valor al placeholder
    component.buttonText = 'Test Button'; // Asigna un valor al botón
    fixture.detectChanges(); // Actualiza la vista

    const basicForm = fixture.debugElement.query(By.directive(BasicFormComponent));
    expect(basicForm).toBeTruthy(); // Verifica que existe la instancia de BasicFormComponent
    expect(basicForm.componentInstance.endOfPlaceHolder).toBe('Test Placeholder'); // Verifica el placeholder
    expect(basicForm.componentInstance.sendButtonText).toBe('Test Button'); // Verifica el texto del botón
  });

  it('should render the TableExampleComponent', () => {
    fixture.detectChanges(); // Actualiza la vista

    const tableExample = fixture.debugElement.query(By.directive(TableExampleComponent));
    expect(tableExample).toBeTruthy(); // Verifica que existe la instancia de TableExampleComponent
  });
});