import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Observable } from 'rxjs';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  @Input() detailData: any;

  perfil: {};
  constructor() { }

  ngOnInit() {}

}
