import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProEditarComponent } from './pro-editar.component';

describe('ProEditarComponent', () => {
  let component: ProEditarComponent;
  let fixture: ComponentFixture<ProEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
