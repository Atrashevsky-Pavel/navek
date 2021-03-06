import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  './header.component.window.scss'
  ]
})
export class HeaderComponent {
  check = false;
  checkMin = false;
  callUser() {
    if (this.check) {
      this.check = false;
    } else {
      this.check = true;
    }
  }
  callUserMin(val) {
    this.checkMin = val;
  }
}
