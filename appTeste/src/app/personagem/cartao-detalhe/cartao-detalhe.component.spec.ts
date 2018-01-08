import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoDetalheComponent } from './cartao-detalhe.component';

describe('CartaoDetalheComponent', () => {
  let component: CartaoDetalheComponent;
  let fixture: ComponentFixture<CartaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
