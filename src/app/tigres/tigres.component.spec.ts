import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigresComponent } from './tigres.component';

describe('TigresComponent', () => {
  let component: TigresComponent;
  let fixture: ComponentFixture<TigresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
