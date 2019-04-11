import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MobileService } from "../../services/mobile.service"
import { Mobile } from "../../model/mobile";

@Component({
  selector: 'app-mobilelist',
  templateUrl: './mobilelist.component.html',
  styleUrls: ['./mobilelist.component.css']
})
export class MobilelistComponent implements OnInit {

  mobile: Mobile[];

  constructor(private router: Router, private mobileService: MobileService) { }

  ngOnInit() {
    this.mobileService.getMobile()
      .subscribe(data => {
        this.mobile = data;
      });

      this.doCheck();
  }

  deleteMobile(mobile: Mobile): void {
    this.mobileService.deleteMobile(mobile.id)
      .subscribe(data => {
        this.mobile = this.mobile.filter(u => u !== mobile);
      })
  };

  addMobile() {
    this.router.navigate(['addmobile']);
  };

  editMobile(mobile: Mobile): void {
    localStorage.removeItem("editMobileId");
    localStorage.setItem("editMobileId", mobile.id.toString());
    this.router.navigate(['editmobile']);
  };

  doCheck(){
    let isAuth=sessionStorage.getItem("sessionID");
    if(isAuth==undefined)
    this.router.navigate(['login']);
  }

  onLogout(){
    sessionStorage.removeItem("sessionID");
    this.router.navigate(['login']);
  }
}
