import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.scss']
})
export class ProfileEducationComponent implements OnInit {

  @Input() educationData: any;

  constructor() { }

  ngOnInit() {
  }

}
