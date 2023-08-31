import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'recipeBook';

}

// Data binding
/**
 *
 * 1 - component > templete propertery binding
 * 2 - templete > component Event binding
 * 3 - template <> component two way binding
 *
 */

/**
 * <select>
 * <option *ngFor = "let arr if testArr" [value] = "arr"> {{arr}} </option>
 * </select>
 */

// event binding
/**
 * (click) = "clickFun()"
 *
 */

// two way binding
/**
 * ngModel => [(ngModel) = "Model"]
 */


