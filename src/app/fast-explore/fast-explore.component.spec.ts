import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastExploreComponent } from './fast-explore.component';

describe('FastExploreComponent', () => {
  let component: FastExploreComponent;
  let fixture: ComponentFixture<FastExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
