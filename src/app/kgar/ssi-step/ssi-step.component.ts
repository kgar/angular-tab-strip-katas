import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ssi-step',
  templateUrl: './ssi-step.component.html',
  styleUrls: ['./ssi-step.component.scss'],
})
export class SsiStepComponent implements OnInit {
  @Input() enabled = true;
  @Input() stepTitle = 'Unknown Title';
  active = false;

  constructor() {}

  ngOnInit(): void {}
}
