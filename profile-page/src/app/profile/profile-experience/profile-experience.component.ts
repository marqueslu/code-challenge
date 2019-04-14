import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-experience",
  templateUrl: "./profile-experience.component.html",
  styleUrls: ["./profile-experience.component.scss"]
})
export class ProfileExperienceComponent implements OnInit {

  @Input() experienceData: any;
  @Input() title: any;

  constructor() {}

  ngOnInit() {}
}
