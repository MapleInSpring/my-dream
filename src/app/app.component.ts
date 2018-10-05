import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new FormControl('');
  achieveDream = new FormControl('');
  achieveCheckbox = new FormControl(false);
}
