import { Component } from '@angular/core';
import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = [];
  constructor(
    private wikipedia: WikipediaService
  ) {}
  onTerm (term: string) {
    this.wikipedia.search(term).subscribe( (res: any) => {
      this.pages = res.query.search;
    });
  }
}
