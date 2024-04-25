import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormationsComponent } from './resume-formations.component';

describe('ResumeFormationsComponent', () => {
  let component: ResumeFormationsComponent;
  let fixture: ComponentFixture<ResumeFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
