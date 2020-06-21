import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tab-strip-trial';
  completed = false;

  firstInputFormGroup: FormGroup;
  secondInputFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstInputFormGroup = this.fb.group({
      firstInput: ['', Validators.required]
    });

    this.secondInputFormGroup = this.fb.group({
      secondInput: ['b', Validators.required]
    });
  }

  completeStep(): void {
    this.completed = true;
  }
}
