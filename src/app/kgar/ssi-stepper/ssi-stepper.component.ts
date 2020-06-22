import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { SsiStepComponent } from '../ssi-step/ssi-step.component';

@Component({
  selector: 'app-ssi-stepper',
  templateUrl: './ssi-stepper.component.html',
  styleUrls: ['./ssi-stepper.component.scss'],
})
export class SsiStepperComponent implements AfterContentInit {
  get isLastStep() {
    return this.steps.toArray()[this.steps.toArray().length - 1].active;
  }
  get isFirstStep() {
    return this.steps.toArray()[0].active;
  }
  selectedIndex = 0;
  @ContentChildren(SsiStepComponent) steps: QueryList<SsiStepComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    const steps = this.steps.toArray();

    for (const step of steps) {
      if (step.enabled) {
        step.active = true;
        break;
      }
    }
  }

  goRight() {
    let activateNext = false;
    let stepToDeactivate: SsiStepComponent;
    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps.toArray()[i];

      if (activateNext) {
        step.active = true;
        stepToDeactivate.active = false;
        break;
      }

      if (step.active) {
        activateNext = true;
        stepToDeactivate = step;
      }
    }
  }

  goLeft() {
    let activateNext = false;
    let stepToDeactivate: SsiStepComponent;
    for (let i = this.steps.length - 1; i >= 0 ; i--) {
      const step = this.steps.toArray()[i];

      if (activateNext) {
        step.active = true;
        stepToDeactivate.active = false;
        break;
      }

      if (step.active) {
        activateNext = true;
        stepToDeactivate = step;
      }
    }
  }
}
