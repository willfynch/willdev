import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SogePage } from './soge.page';

describe('SogePage', () => {
  let component: SogePage;
  let fixture: ComponentFixture<SogePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SogePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SogePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
