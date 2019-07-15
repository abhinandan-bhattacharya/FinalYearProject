import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RestService } from '../rest.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,private router: Router, private restService: RestService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      roll: [],
      email: ['', Validators.required],
      dept: ['', Validators.required]
    });

    let stdId = localStorage.getItem('editUserId');
    if (+stdId > 0) {  
      this.restService.getStudentById(+stdId).subscribe(data => {  
        this.addForm.patchValue(data);  
      }) 
    }

  }

  onSubmit() {
    this.restService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list']);
      });
  }
}