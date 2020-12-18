import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-heading',
  templateUrl: './custom-heading.component.html',
  styleUrls: ['./custom-heading.component.scss'],
})
export class CustomHeadingComponent implements OnInit {
  @Input() customHeading: string;

  constructor() {}

  ngOnInit(): void {}
}
