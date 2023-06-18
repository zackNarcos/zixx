import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocialComponent } from './social/social.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { BlockContainerComponent } from './block-container/block-container.component';
import { BlockMusicComponent } from './block-music/block-music.component';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SocialComponent,
    TitleSectionComponent,
    BlockContainerComponent,
    BlockMusicComponent,
  ],
  exports: [LayoutComponent, HeaderComponent, BlockContainerComponent],
})
export class UiModule {}
