import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './edit/edit-student';

const appRoutes: Routes=[
{path: 'list', component: StudentListComponent},
 {path: 'form', component: StudentFormComponent},
 {path: 'edit', component: EditUserComponent},
 {path:'', redirectTo:'list' , pathMatch:'full'}
 ];
 
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
