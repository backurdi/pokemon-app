import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTableHeaderComponent } from './pokemon-table-header.component';

describe('PokemonTableHeaderComponent', () => {
  let component: PokemonTableHeaderComponent;
  let fixture: ComponentFixture<PokemonTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
