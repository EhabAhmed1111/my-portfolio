import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroCardComponent } from './components/intro-card/intro-card.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroCardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
