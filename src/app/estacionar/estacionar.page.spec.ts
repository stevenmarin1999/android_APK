import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstacionarPage } from './estacionar.page';

describe('EstacionarPage', () => {
  let component: EstacionarPage;
  let fixture: ComponentFixture<EstacionarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstacionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
