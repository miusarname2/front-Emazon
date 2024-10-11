import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSimpleCreateComponent } from './template-simple-create.component';

describe('TemplateSimpleCreateComponent', () => {
  let component: TemplateSimpleCreateComponent;
  let fixture: ComponentFixture<TemplateSimpleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSimpleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSimpleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
