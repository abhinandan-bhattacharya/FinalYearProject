import { Component, OnInit } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { StudentModel } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  abc;

  constructor(private router: Router, private restservice: RestService) { }

  ngOnInit() {
    //   this.router.navigate[('/form')];
    this.restservice.getStudent().subscribe(a => this.abc = a);
  }
  add(): void {
    this.router.navigate(['form']);
  };

  deleteUser(std: StudentModel): void {
    this.restservice.deleteUser(std.id)
      .subscribe(data => {
        this.abc = this.abc.filter(u => u !== std);
      })
  };

  editUser(std: StudentModel): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", std.id.toString());
    this.router.navigate(['edit']);
  };
}
