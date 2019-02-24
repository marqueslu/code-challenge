import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private readonly API = `${environment.API}`;
  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<any[]>(this.API);
  }
}
