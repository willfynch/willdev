import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePersonalProjectsComponent } from './resume-personal-projects.component';

describe('ResumePersonalProjectsComponent', () => {
  let component: ResumePersonalProjectsComponent;
  let fixture: ComponentFixture<ResumePersonalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePersonalProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumePersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
