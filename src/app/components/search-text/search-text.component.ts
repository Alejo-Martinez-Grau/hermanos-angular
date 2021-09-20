import { Component, Input, OnInit } from '@angular/core';
import * as data from './searchdata.json';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss'],
})
export class SearchTextComponent implements OnInit {

  // @Input() public Search: string = null;
  @Input() mensajeGoten: string;

 
  public pets: any = (data as any).default;
  constructor() {}

  ngOnInit(): void {}

  // public OnSearched(searchTerm: string) {
  //   this.Search = searchTerm;
  // }
}
