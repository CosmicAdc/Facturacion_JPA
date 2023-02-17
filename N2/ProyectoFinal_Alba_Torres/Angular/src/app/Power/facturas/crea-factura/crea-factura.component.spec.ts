import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaFacturaComponent } from './crea-factura.component';

describe('CreaFacturaComponent', () => {
  let component: CreaFacturaComponent;
  let fixture: ComponentFixture<CreaFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
