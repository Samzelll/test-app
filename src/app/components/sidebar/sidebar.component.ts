import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Terms and Conditions', link: '/terms' },
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Responsible Gaming', link: '/responsible' },
    { label: 'Bonus Terms', link: '/bonus' },
    { label: 'Contact Us', link: '/contact' }
  ];
}
