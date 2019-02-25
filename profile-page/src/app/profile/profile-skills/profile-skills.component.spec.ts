import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileSkillsComponent } from "./profile-skills.component";
import { ProfileComponent } from "../profile.component";
import { ProfileModule } from "../profile.module";
import { ProfileService } from "../profile.service";
import { CommonModule } from "@angular/common";
import { ProfileAvatarComponent } from "../profile-avatar/profile-avatar.component";
import { ProfileDetailComponent } from "../profile-detail/profile-detail.component";
import { ProfileExperienceComponent } from "../profile-experience/profile-experience.component";
import { HttpClientModule } from "@angular/common/http";

describe("ProfileSkillsComponent", () => {
  let component: ProfileSkillsComponent;
  let fixture: ComponentFixture<ProfileSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSkillsComponent],
      imports: [CommonModule, ProfileModule],
      providers: [ProfileService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
