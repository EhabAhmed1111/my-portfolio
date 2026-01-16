import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { IntroCardComponent } from './components/intro-card/intro-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroCardComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
