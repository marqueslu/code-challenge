import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  private profile: any;
  private profileAvatar: any = {};
  private profileDetail: any = {};
  private profileSkills: any = [];
  private profileExperience: any = [];
  private profileEducation: any = [];

  private workTitle: string = "WORK EXPERIENCE";
  private educationTitle: string = "EDUCATION";

  constructor(private service: ProfileService) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.service.list().subscribe(profile => {
      this.profile = profile;

      this.profileAvatar = {
        'image': this.profile.profile.image,
        'name': this.profile.profile.name,
        'profession': this.profile.profile.profession
      };

      this.profileDetail = {
        'description': this.profile.profile.description,
        'contact': this.profile.profile.contact
      };

      this.profileSkills = {
        'skills': this.profile.profile.skills
      };

      this.profileExperience = this.profile.profile.experience;
      this.profileEducation = this.profile.profile.education;
    });

  }
}
