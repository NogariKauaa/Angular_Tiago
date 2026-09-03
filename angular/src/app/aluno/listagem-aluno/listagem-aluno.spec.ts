import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAluno } from './listagem-aluno';

describe('ListagemAluno', () => {
  let component: ListagemAluno;
  let fixture: ComponentFixture<ListagemAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
