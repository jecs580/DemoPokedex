import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebuscadoComponent } from './pokebuscado.component';

describe('PokebuscadoComponent', () => {
  let component: PokebuscadoComponent;
  let fixture: ComponentFixture<PokebuscadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokebuscadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokebuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
