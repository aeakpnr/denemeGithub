import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSayfasiComponent } from './form-sayfasi.component';

describe('FormSayfasiComponent', () => {
  let component: FormSayfasiComponent;
  let fixture: ComponentFixture<FormSayfasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSayfasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
