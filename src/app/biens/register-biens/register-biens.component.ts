import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-register-biens',
  templateUrl: './register-biens.component.html',
  styleUrls: ['./register-biens.component.css']
})
export class RegisterBiensComponent implements OnInit {

  biensForm = new FormGroup({
    libelle: new FormControl(''),
    typeb: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(public crudservice:CrudService) { }

  creatbiens(){
    let biens = {};
    biens['libelle'] = this.biensForm.get('libelle').value;
    biens['typeb'] = this.biensForm.get('typeb').value;
    biens['adresse'] = this.biensForm.get('adresse').value;
    biens['ville'] = this.biensForm.get('ville').value;
    biens['description'] = this.biensForm.get('description').value;
    biens['image'] = this.biensForm.get('image').value;

    this.crudservice.creat_newbiens(biens).then(res =>{
      this.biensForm.get('libelle');
      this.biensForm.get('typeb');
      this.biensForm.get('adresse');
      this.biensForm.get('ville');
      this.biensForm.get('description');
      this.biensForm.get('image');
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
