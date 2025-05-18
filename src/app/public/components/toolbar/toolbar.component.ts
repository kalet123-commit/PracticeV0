import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LogoApiService} from '../../../shared/services/logo-api.service';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,

    LanguageSwitcherComponent,
    RouterLink,
    MatAnchor,
    RouterLinkActive,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})

export class ToolbarComponent {
  logoUrl: string;
  constructor(private logoService: LogoApiService){
    this.logoUrl = this.logoService.getLogoUrl('Eventify.com');
  }
}
