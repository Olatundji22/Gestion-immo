import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }
// CRUD client
  creat_newclient(client){
    return this.fireservices.collection('client').add(client);
  }

  get_allclient(){
    return this.fireservices.collection('client').snapshotChanges();
  }

  update_client(Clientid, Client){
    this.fireservices.doc('client/'+ Clientid).update(Client);
  }

  delete_client(client_id){
    this.fireservices.doc('client/'+ client_id).delete();
  }

//CRUD biens
  creat_newbiens(biens){
    return this.fireservices.collection('biens').add(biens);
  }

  get_allbiens(){
    return this.fireservices.collection('biens').snapshotChanges();
  }

  update_biens(Biensid, Biens){
    this.fireservices.doc('biens/'+ Biensid).update(Biens);
  }

  delete_biens(biens_id){
    this.fireservices.doc('biens/'+ biens_id).delete();
  }

}
