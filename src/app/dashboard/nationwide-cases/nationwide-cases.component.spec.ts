import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationwideCasesComponent } from './nationwide-cases.component';

describe('NationwideCasesComponent', () => {
  let component: NationwideCasesComponent;
  let fixture: ComponentFixture<NationwideCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationwideCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationwideCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
