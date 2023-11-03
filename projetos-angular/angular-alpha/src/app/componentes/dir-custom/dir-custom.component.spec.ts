import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirCustomComponent } from './dir-custom.component';

describe('DirCustomComponent', () => {
  let component: DirCustomComponent;
  let fixture: ComponentFixture<DirCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
