import { Component } from '@angular/core';

@Component({
  selector: 'zixx-fe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems = [
    {
        label: 'Accueil',
        link: '/home',
    },
    {
        label: 'Tournée',
        link: '/tour',
    },
    {
        label: 'Video',
        link: '/video',
    },
    {
        label: 'Abonez-vous',
        link: '/subscribe',
    }
  ];
}
