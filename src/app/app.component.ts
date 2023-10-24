import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringToEvaluate:string=""

  takeInput(num:string){
    this.stringToEvaluate = this.stringToEvaluate + num;
  }
  evaluateResult(){
    if(this.stringToEvaluate != ''){
      this.stringToEvaluate = eval(this.stringToEvaluate);
    }
  }
  resetInput(){
    this.stringToEvaluate = "";
  }
}
