import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InstallAppComponent } from './components/install-app/install-app.component';
import { CommonModule } from '@angular/common';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SidebarComponent,
    InstallAppComponent,
    CommonModule,
    ChangeLanguageComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
