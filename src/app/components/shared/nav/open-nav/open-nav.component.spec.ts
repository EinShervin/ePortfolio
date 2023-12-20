import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNavComponent } from './open-nav.component';

describe('OpenNavComponent', () => {
  let component: OpenNavComponent;
  let fixture: ComponentFixture<OpenNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenNavComponent]
    });
    fixture = TestBed.createComponent(OpenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
