import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlInputComponent } from './url-input/url-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UrlInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quickurl';

  shortenURL(input: string) {}
}
