import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormCreateComponent } from './lista-form-create.component';

describe('ListaFormCreateComponent', () => {
  let component: ListaFormCreateComponent;
  let fixture: ComponentFixture<ListaFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
