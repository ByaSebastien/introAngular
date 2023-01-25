import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDICComponent } from './crudic.component';

describe('CRUDICComponent', () => {
  let component: CRUDICComponent;
  let fixture: ComponentFixture<CRUDICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
