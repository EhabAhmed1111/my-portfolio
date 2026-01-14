import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroCardComponent } from './components/intro-card/intro-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
