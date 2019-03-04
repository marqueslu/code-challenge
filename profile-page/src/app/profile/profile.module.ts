import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileAvatarComponent } from "./profile-avatar/profile-avatar.component";
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";
import { ProfileExperienceComponent } from "./profile-experience/profile-experience.component";
import { ProfileSkillsComponent } from "./profile-skills/profile-skills.component";

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileAvatarComponent,
    ProfileDetailComponent,
    ProfileExperienceComponent,
    ProfileSkillsComponent
  ],
  imports: [CommonModule ],
  exports: [ProfileComponent, ProfileSkillsComponent]
})
export class ProfileModule {}
