import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTableHeaderComponent } from './pokemon-table-header.component';

describe('PokemonTableHeaderComponent', () => {
  let component: PokemonTableHeaderComponent;
  let fixture: ComponentFixture<PokemonTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
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
  
  it('search field should be rendered', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.search-field')).toBeTruthy();
  });

  it('sort dropdown should be rendered', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.sort-dropdown')).toBeTruthy();
  });

  it('page size dropdown should be rendered', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-size-dropdown')).toBeTruthy();
  });
});
