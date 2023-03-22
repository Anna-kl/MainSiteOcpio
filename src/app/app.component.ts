import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopUpService } from 'src/services/pop-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MainSiteOcpio';
  isOpen: BehaviorSubject<boolean> = this.popupService.getItems$();
  constructor(private popupService: PopUpService) {}

  openPopUp() {
    this.popupService.updateItems(true);
  }
}
