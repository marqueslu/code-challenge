import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileComponent } from "./profile.component";
import { ProfileService } from "./profile.service";
import { ProfileAvatarComponent } from "./profile-avatar/profile-avatar.component";
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";
import { ProfileExperienceComponent } from "./profile-experience/profile-experience.component";
import { ProfileSkillsComponent } from "./profile-skills/profile-skills.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        ProfileAvatarComponent,
        ProfileDetailComponent,
        ProfileExperienceComponent,
        ProfileSkillsComponent
      ],
      providers: [ProfileService],
      imports: [CommonModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
