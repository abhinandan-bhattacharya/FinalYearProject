import { OnInit, Component } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { StudentModel } from "../models/student.model";
import { RestService } from "../rest.service";

@Component({
    selector: 'app-edit-student',
    templateUrl: './edit-student.html',
    styleUrls: ['./edit-student.css']
  })

export class EditUserComponent  implements OnInit {
    
    student: StudentModel;
    editForm: FormGroup;
    constructor(private formBuilder: FormBuilder,private router: Router, private restService: RestService) { }
  
    ngOnInit() {
      let stdId = localStorage.getItem("editUserId");
      if(!stdId) {
        alert("Invalid action.")
        this.router.navigate(['list']);
        return;
      }
      this.editForm = this.formBuilder.group({
        id: [],
        firstName: ['', Validators.required],
        roll: [],
        email: ['', Validators.required],
        dept: ['', Validators.required]
      });
      this.restService.getStudentById(+stdId)
        .subscribe( data => {
          this.editForm.setValue(data);
        });
    }
  
    onSubmit() {
      this.restService.updateUser(this.editForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['list']);
          },
          error => {
            alert(error);
          });
    }
  
  }
  