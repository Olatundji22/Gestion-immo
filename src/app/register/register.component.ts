import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email="";
  password="";
  errorMessage="";
  error:{ name:string, message:string } = { name:"", message:""};


  constructor( private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.validateForm(this.email, this.password))
    {
      this.authservice.registerWithMail(this.email, this.password).then((result) => {
        this.router.navigate(['/userinfos'])
      }).catch(_error =>{
        this.error = _error;
        this.router.navigate(['/register']);

      })
    }
  }

  validateForm(email, password)
  {

    if(email.lenght ===0)
    {
      this.errorMessage = "Veuillez entrer un mail";
      return false;
    }

    if(password.lenght ===0)
    {
      this.errorMessage = "Veuillez entrer un mot de passe";
      return false;
    }

    if(password.lenght <6 )
    {
      this.errorMessage = "Le mot de passe doit contenir au moins 6 caractères";
      return false;
    }

    this.errorMessage="";
    return true;

  }

}
