import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContactComponent } from './shop-contact.component';

describe('ShopContactComponent', () => {
  let component: ShopContactComponent;
  let fixture: ComponentFixture<ShopContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
