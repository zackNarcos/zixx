import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockMusicComponent } from './block-music.component';

describe('BlockMusicComponent', () => {
  let component: BlockMusicComponent;
  let fixture: ComponentFixture<BlockMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockMusicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
