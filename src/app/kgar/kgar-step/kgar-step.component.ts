import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kgar-step',
  templateUrl: './kgar-step.component.html',
  styleUrls: ['./kgar-step.component.scss']
})
export class KgarStepComponent implements OnInit {
  @Input() enabled = true;
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
