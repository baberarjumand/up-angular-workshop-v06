import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
})
export class UserDataFormComponent implements OnInit {
  userFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService
  ) {
    this.userFormGroup = this.formBuilder.group({
      name: '',
      email: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const newUserObj = {
      name: this.userFormGroup.value.name,
      email: this.userFormGroup.value.email,
    };

    this.userDataService.updateCurrentUser(newUserObj);
  }
}
