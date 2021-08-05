import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-liste-biens',
  templateUrl: './liste-biens.component.html',
  styleUrls: ['./liste-biens.component.css']
})
export class ListeBiensComponent implements OnInit {

  public showdetail : boolean;

  /**
   * details
  : void  */
  public detail() : void {
    this.showdetail = !this.showdetail;
  }


  listebiens: any;

  constructor(public crudservice:CrudService) { }

  ngOnInit(): void {
    this.crudservice.get_allbiens().subscribe(data => {this.listebiens = data.map(e => {
      return{
        id: e.payload.doc.id,
        libelle: e.payload.doc.data()['libelle'],
        typeb: e.payload.doc.data()['typeb'],
        adresse: e.payload.doc.data()['adresse'],
        ville: e.payload.doc.data()['ville'],
        description: e.payload.doc.data()['description'],
        image: e.payload.doc.data()['image'],
      };
    })
    console.log(this.listebiens)
  })
  }

  ModifierBiens(biens){
    biens.isedit = true;
    biens.editlibelle = biens.libelle;
    biens.edittypeb = biens.typeb;
    biens.editadresse = biens.adresse;
    biens.editville = biens.ville;
    biens.editdescription = biens.description;
  }

  UpdateBiens(biensdata){
    let Biens = {};
    Biens['libelle'] = biensdata.editlibelle;
    Biens['typeb'] = biensdata.edittypeb;
    Biens['adresse'] = biensdata.editadresse;
    Biens['ville'] = biensdata.editville;
    Biens['description'] = biensdata.editdescription;
    this.crudservice.update_biens(biensdata.id, Biens);
    biensdata.isedit = false;
  }

  SupprimerBiens(biens_id){
    this.crudservice.delete_biens(biens_id);
  }



}
