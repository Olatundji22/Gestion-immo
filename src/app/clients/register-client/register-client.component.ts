import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  clientForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    mail: new FormControl(''),
    contact: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
  });
  message: string;

  constructor(public crudservice:CrudService) { }

  creatclient(){
    let client = {};
    client['nom'] = this.clientForm.get('nom').value;
    client['prenom'] = this.clientForm.get('prenom').value;
    client['mail'] = this.clientForm.get('mail').value;
    client['contact'] = this.clientForm.get('contact').value;
    client['adresse'] = this.clientForm.get('adresse').value;
    client['ville'] = this.clientForm.get('ville').value;

    this.crudservice.creat_newclient(client).then(res =>{

      this.clientForm.get('nom');
      this.clientForm.get('prenom');
      this.clientForm.get('mail');
      this.clientForm.get('contact');
      this.clientForm.get('adresse');
      this.clientForm.get('ville');
      this.message = "Yes";
      console.log(res);
    }).catch(error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
    
  }

  
  
}
