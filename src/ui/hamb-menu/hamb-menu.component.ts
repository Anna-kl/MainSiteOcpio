import { Component } from '@angular/core';

@Component({
  selector: 'app-hamb-menu',
  templateUrl: './hamb-menu.component.html',
  styleUrls: ['./hamb-menu.component.css'],
})
export class HambMenuComponent {
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
