import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  listcli : any;
  
  constructor(public crudservice:CrudService) {

  }

  ngOnInit(): void {
    this.crudservice.get_allclient().subscribe(data => {this.listcli = data.map(e => {
      return {
        id: e.payload.doc.id,
        isedit: false,
        nom: e.payload.doc.data()['nom'],
        prenom: e.payload.doc.data()['prenom'],
        mail: e.payload.doc.data()['mail'],
        contact: e.payload.doc.data()['contact'],
        adresse: e.payload.doc.data()['adresse'],
        ville: e.payload.doc.data()['ville']
      };
    })
    console.log(this.listcli)
  })
  }

  ModifierClient(client){
    client.isedit = true;
    client.editnom = client.nom;
    client.editprenom = client.prenom;
    client.editmail = client.mail;
    client.editcontact = client.contact;
    client.editadresse = client.adresse;
    client.editville = client.ville;
  }

  UpdateClient(clientdata){
    let Client = {};
    Client['nom'] = clientdata.editnom;
    Client['prenom'] = clientdata.editprenom;
    Client['mail'] = clientdata.editmail;
    Client['contact'] = clientdata.editcontact;
    Client['adresse'] = clientdata.editadresse;
    Client['ville'] = clientdata.editville;
    this.crudservice.update_client(clientdata.id, Client);
    clientdata.isedit = false;
  }

  SupprimerClient(client_id){
    this.crudservice.delete_client(client_id);
  }

}
