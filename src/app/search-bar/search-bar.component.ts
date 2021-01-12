import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  term = "";
  @Output() shared = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.term = value;
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.shared.emit(this.term);
  }

}
