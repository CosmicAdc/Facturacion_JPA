import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCrearComponent } from './pro-crear.component';

describe('ProCrearComponent', () => {
  let component: ProCrearComponent;
  let fixture: ComponentFixture<ProCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
