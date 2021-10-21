import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeAssistirComponent } from './onde-assistir.component';

describe('OndeAssistirComponent', () => {
  let component: OndeAssistirComponent;
  let fixture: ComponentFixture<OndeAssistirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndeAssistirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OndeAssistirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
