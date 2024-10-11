import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMiniComponent } from './sidebar-mini.component';

describe('SidebarMiniComponent', () => {
  let component: SidebarMiniComponent;
  let fixture: ComponentFixture<SidebarMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
