import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductListComponent } from './shop-product-list.component';

describe('ShopProductListComponent', () => {
  let component: ShopProductListComponent;
  let fixture: ComponentFixture<ShopProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
