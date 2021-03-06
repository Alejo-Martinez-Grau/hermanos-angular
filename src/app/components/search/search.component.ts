import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() mensajeDesdeSearchBar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onSearch(searchTerm: string): void {
    this.mensajeDesdeSearchBar.emit(searchTerm);
  }
}
