import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiketePage } from './tikete.page';

describe('TiketePage', () => {
  let component: TiketePage;
  let fixture: ComponentFixture<TiketePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TiketePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
