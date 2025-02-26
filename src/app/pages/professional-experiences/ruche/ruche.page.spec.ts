import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuchePage } from './ruche.page';

describe('RuchePage', () => {
  let component: RuchePage;
  let fixture: ComponentFixture<RuchePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuchePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
