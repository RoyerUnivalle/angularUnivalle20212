import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiModuloComponent } from './mi-modulo.component';

describe('MiModuloComponent', () => {
  let component: MiModuloComponent;
  let fixture: ComponentFixture<MiModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
