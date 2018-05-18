import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyComponent } from './trendy.component';

describe('TrendyComponent', () => {
  let component: TrendyComponent;
  let fixture: ComponentFixture<TrendyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
