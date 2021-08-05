import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { logging } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email="";
  password="";
  errorMessage="";
  error:{ name:string, message:string } = { name:"", message:""};

  constructor( private authservice:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    alert("login succes!");
  }

}
