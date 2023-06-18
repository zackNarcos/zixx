import { Component } from '@angular/core';

@Component({
  selector: 'zixx-fe-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  links = [
    {
        label: 'Facebook',
        link: 'https://www.facebook.com',
        icon: 'facebook-f',
    },
    {
        label: 'Instagram',
        link: 'https://www.instagram.com',
        icon: 'instagram',
    },
    {
        label: 'Youtube',
        link: 'https://www.youtube.com/',
        icon: 'youtube',
    },
    {
        label: 'Twitter',
        link: 'https://twitter.com/',
        icon: 'twitter',
    },
    {
        label: 'Tiktok',
        link: 'https://www.tiktok.com/',
        icon: 'tiktok',
    },
    {
        label: 'Spotify',
        link: 'https://www.spotify.com/',
        icon: 'spotify',
    }
  ];
}
