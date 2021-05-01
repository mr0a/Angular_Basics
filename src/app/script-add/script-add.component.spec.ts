import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptAddComponent } from './script-add.component';

describe('ScriptAddComponent', () => {
  let component: ScriptAddComponent;
  let fixture: ComponentFixture<ScriptAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
