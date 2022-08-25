import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

// our service class where we provide all the crud operation api and connect the backend 
export class AddressbookServiceService {

  constructor(private http:HttpClient) { }

  insertAddressBook(addressbook:any){
    return this.http.post("http://localhost:8081/addressBook/create",addressbook);
  }
  getAddressBook(){
    return this.http.get("http://localhost:8081/addressBook/get");
  }
  getAddressBookById(Id:number){
    return this.http.get("http://localhost:8081/addressBook/get/"+Id);
  }
  updateAddressBookById(Id:number,addressbook:any){
    return this.http.put("http://localhost:8081/addressBook/update/"+Id,addressbook);
  }
  deleteAddressBookById(Id:number){
    return this.http.delete("http://localhost:8081/addressBook/delete/"+Id);
  }
}
