import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log(this.name, this.email, this.message);
  }
}
