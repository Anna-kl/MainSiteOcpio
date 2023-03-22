import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PopUpService } from 'src/services/pop-up.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  activePopUpId = 0;
  firstPopUp = new FormGroup({
    phone: new FormControl(''),
    checkbox: new FormControl(''),
  });
  constructor(private PopUpService: PopUpService) {}
  nextPopUp(): void {
    this.activePopUpId++;
  }
  closePopUp(): void {
    this.PopUpService.updateItems(false);
    this.activePopUpId = 0;
  }
}
