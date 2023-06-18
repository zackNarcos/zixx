import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZixxButtonComponent } from './zixx-button.component';

describe('ZixxButtonComponent', () => {
  let component: ZixxButtonComponent;
  let fixture: ComponentFixture<ZixxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZixxButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZixxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
