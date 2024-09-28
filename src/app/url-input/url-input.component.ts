import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
})
export class UrlInputComponent {
  urlInput: string = ''; // User input URL
  responseUrl: string = ''; // Extracted quick URL from the response

  constructor(private http: HttpClient) {}

  // sendUrl() {
  //   if (this.urlInput) {
  //     const apiUrl = '/api';

  //     // Sending the input URL as the request body
  //     this.http.post<{ quickURl: string }>(apiUrl, { url: this.urlInput })
  // .subscribe({
  //   next: (response) => {
  //     this.responseUrl = response.quickURl;  // Handle the response correctly
  //   }
  // });
  //   } else {
  //     console.warn('URL input is empty');
  //   }
  // }
  sendUrl() {
    if (this.urlInput) {
      const apiUrl = 'http://65.0.122.230:8080/api'; // Using the proxy endpoint

      this.http
        .post<{
          quickURl: string;
        }>(apiUrl, this.urlInput)
        .subscribe(response => {
          console.log('API Response:', response); // Log the full response
          if (response.quickURl) {
            this.responseUrl = response.quickURl; // Ensure quickURl exists in the response
          } else {
            console.error('Unexpected response structure:', response);
            this.responseUrl = 'Unexpected response structure.';
          }
        });
    } else {
      console.warn('URL input is empty');
      this.responseUrl = 'Please enter a URL.';
    }
  }
}
