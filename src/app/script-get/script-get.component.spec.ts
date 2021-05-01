import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGetComponent } from './script-get.component';

describe('ScriptGetComponent', () => {
  let component: ScriptGetComponent;
  let fixture: ComponentFixture<ScriptGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
