import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.scss']
})
export class ProfileSkillsComponent implements OnInit {

  @Input() skillsData: any;
  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

}
