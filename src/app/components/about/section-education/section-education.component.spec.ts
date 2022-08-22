import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEducationComponent } from './section-education.component';

describe('SectionEducationComponent', () => {
  let component: SectionEducationComponent;
  let fixture: ComponentFixture<SectionEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
