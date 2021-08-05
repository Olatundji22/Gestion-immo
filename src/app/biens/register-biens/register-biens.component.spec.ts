import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBiensComponent } from './register-biens.component';

describe('RegisterBiensComponent', () => {
  let component: RegisterBiensComponent;
  let fixture: ComponentFixture<RegisterBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
