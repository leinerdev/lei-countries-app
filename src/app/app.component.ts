import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countriesApp';

  app: boolean = false;

  showApp (value: boolean) {
    this.app = true;
  }
}
