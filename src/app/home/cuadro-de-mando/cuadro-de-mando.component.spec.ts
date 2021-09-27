import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDeMandoComponent } from './cuadro-de-mando.component';

describe('CuadroDeMandoComponent', () => {
  let component: CuadroDeMandoComponent;
  let fixture: ComponentFixture<CuadroDeMandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroDeMandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroDeMandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
