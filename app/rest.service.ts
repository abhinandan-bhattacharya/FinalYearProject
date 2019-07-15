import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from './models/student.model';


@Injectable({
  providedIn: 'root'
})
export class RestService {

baseUrl= 'http://localhost:3000/student';

constructor(private httpClient: HttpClient) { }

getStudent()
 {
   return this.httpClient.get(this.baseUrl);
 }

 getStudentById(id: number) {
  return this.httpClient.get(this.baseUrl + '/' + id);
}

createUser(student: StudentModel) {
  return this.httpClient.post(this.baseUrl, student);
}

updateUser(std: StudentModel) {
  return this.httpClient.put(this.baseUrl + '/' + std.id, std);
}

deleteUser(id: number) {
  return this.httpClient.delete(this.baseUrl + '/' + id);
}

}

