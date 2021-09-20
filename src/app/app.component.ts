import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highlightSearch';

  public subrayado: string = null;

   public OnSearched(searchTerm: string) {
    this.subrayado = searchTerm;
  }

  // enviarAGoten: string;

  // mensajeParaGoten(searchTerm: string){
  //   this.enviarAGoten = searchTerm;  //searchTerm = mensaje 
  // }
}
