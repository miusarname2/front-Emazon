import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormComponent } from './basic-form.component';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('BasicFormComponent', () => {
  let component: BasicFormComponent;
  let fixture: ComponentFixture<BasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFormComponent], // Se importa el componente ya que es standalone
    }).compileComponents();

    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update placeholderFirst when endOfPlaceHolder changes', () => {
    // Act
    component.endOfPlaceHolder = 'producto';
    component.ngOnChanges({
      endOfPlaceHolder: new SimpleChange(null, 'producto', true)
    });
    fixture.detectChanges(); // Actualizamos la vista

    // Assert
    const inputElement = fixture.debugElement.query(By.css('#Nombre')).nativeElement;
    expect(inputElement.placeholder).toBe('Nombre de producto');
  });

  it('should display the correct text on the submit button', () => {
    // Arrange
    component.sendButtonText = 'Enviar Formulario';

    // Act
    fixture.detectChanges(); // Refrescamos la vista

    // Assert
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent).toBe('Enviar Formulario');
  });

  it('should render the form correctly with default placeholders and button text', () => {
    // Act
    fixture.detectChanges(); // Refrescamos la vista

    // Assert
    const inputElement = fixture.debugElement.query(By.css('#Nombre')).nativeElement;
    expect(inputElement.placeholder).toBe('Nombre de ');

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent).toBe('');
  });
});
