import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MobileService } from "../../services/mobile.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmobile',
  templateUrl: './addmobile.component.html',
  styleUrls: ['./addmobile.component.css']
})
export class AddmobileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private mobileService: MobileService) { }

  addForm: FormGroup;
  submitted: boolean = false;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.mobileService.setMobile(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['mobilelist']);
      });
  }

}
