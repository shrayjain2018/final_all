import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  // submitted:boolean=false;


  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['listuser']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.userService.getUserById(+userId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  editUser(): void {
    this.router.navigate(['edituser']);
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['listuser']);
        },
        error => {
          alert(error);
        });
  }

}

