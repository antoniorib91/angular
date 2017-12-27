import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomisadasComponent } from './diretivas-customisadas.component';

describe('DiretivasCustomisadasComponent', () => {
  let component: DiretivasCustomisadasComponent;
  let fixture: ComponentFixture<DiretivasCustomisadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCustomisadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustomisadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
