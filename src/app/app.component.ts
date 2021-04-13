import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 contador = 1;

 incrementar (){
   this.contador++;
 }
decrementar (){
  this.contador--;
}

}
