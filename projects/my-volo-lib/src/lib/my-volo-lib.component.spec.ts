import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVoloLibComponent } from './my-volo-lib.component';

describe('MyVoloLibComponent', () => {
  let component: MyVoloLibComponent;
  let fixture: ComponentFixture<MyVoloLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVoloLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVoloLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
