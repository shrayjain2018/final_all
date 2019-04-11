import { Component, OnInit } from '@angular/core';
import { MobileService } from "../../services/mobile.service";
import { Router } from "@angular/router";
import { Mobile } from "../../model/mobile";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-editmobile',
  templateUrl: './editmobile.component.html',
  styleUrls: ['./editmobile.component.css']
})
export class EditmobileComponent implements OnInit {

  mobile: Mobile;
  editForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private mobileService: MobileService) { }

  ngOnInit() {
    let mobileId = localStorage.getItem("editMobileId");
    if (!mobileId) {
      alert("Invalid action.")
      this.router.navigate(['mobilelist']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.mobileService.getMobileById(+mobileId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.mobileService.updateMobile(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['mobilelist']);
        },
        error => {
          alert(error);
        });
  }

}
