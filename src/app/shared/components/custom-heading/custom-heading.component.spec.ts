import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeadingComponent } from './custom-heading.component';

describe('CustomHeadingComponent', () => {
  let component: CustomHeadingComponent;
  let fixture: ComponentFixture<CustomHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
