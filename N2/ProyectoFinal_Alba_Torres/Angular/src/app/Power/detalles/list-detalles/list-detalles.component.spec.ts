import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetallesComponent } from './list-detalles.component';

describe('ListDetallesComponent', () => {
  let component: ListDetallesComponent;
  let fixture: ComponentFixture<ListDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
