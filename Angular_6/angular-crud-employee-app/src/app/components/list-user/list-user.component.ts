import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  users: User[];
  editForm: FormGroup;
  submitted: boolean = false;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("username") != null) {
      this.userservice.getUsers().subscribe(data => {
        this.users = data;
      });
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  deleteUser(user: User): void {
    let result = confirm("Do you want to delete username")
    if (result) {
      this.userservice.deleteUser(user.id).subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
    }
  }

  adduser(): void {
    this.router.navigate(['adduser']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    this.userservice.updateUser(this.editForm.value)
      .subscribe(
        data => {
          this.router.navigate(['listuser']);
        },
        error => {
          alert(error);
        });
  }

  logOutUser(): void {
    if (localStorage.getItem("username") != null) {
      localStorage.removeItem("username");
      this.router.navigate(['/login']);
    }
  }

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edituser']);
  };

}
