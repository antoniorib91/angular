import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormEditComponent } from './lista-form-edit.component';

describe('ListaFormEditComponent', () => {
  let component: ListaFormEditComponent;
  let fixture: ComponentFixture<ListaFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
