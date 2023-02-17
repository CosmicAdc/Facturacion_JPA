import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProListarComponent } from './pro-listar.component';

describe('ProListarComponent', () => {
  let component: ProListarComponent;
  let fixture: ComponentFixture<ProListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
