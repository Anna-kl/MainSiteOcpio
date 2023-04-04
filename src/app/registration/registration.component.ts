import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/services/http/http.service';
import { PopUpService } from 'src/services/pop-up/pop-up.service';
import { IData } from '../../ui/countryselect/countryselect.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  activePopUpId = 0;
  mask = '';
  firstPopUp = new FormGroup({
    country: new FormControl({} as IData, Validators.required),
    phone: new FormControl('', Validators.required),
    checkbox: new FormControl('', Validators.required),
  });
  constructor(
    private PopUpService: PopUpService,
    private http: HttpService<any>
  ) {}
  ngOnInit() {
    this.firstPopUp.get('country')?.valueChanges.subscribe((data) => {
      if (data) {
        this.mask = data.code + data.mask;
      }
    });
  }

  nextPopUp(): void {
    this.activePopUpId++;
  }
  closePopUp(): void {
    this.PopUpService.updateItems(false);
    this.activePopUpId = 0;
  }
  onSubmit() {
    if (this.firstPopUp.valid) {
      this.http
        .getData(
          `https://83.222.9.120/v1/api/Auths/${this.firstPopUp.get('phone')}`
        )
        .subscribe((data) => {
          console.log(data);
        });
      this.activePopUpId++;
    }
  }
}
