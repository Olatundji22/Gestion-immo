import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BiensComponent } from './biens/biens.component';
import { ClientsComponent } from './clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import { ListeClientComponent } from './clients/liste-client/liste-client.component';
import { RegisterClientComponent } from './clients/register-client/register-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeBiensComponent } from './biens/liste-biens/liste-biens.component';
import { RegisterBiensComponent } from './biens/register-biens/register-biens.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CrudService } from './service/crud.service';
import { LocationComponent } from './location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeLocationComponent } from './location/liste-location/liste-location.component';
import { RegisterLocationComponent } from './location/register-location/register-location.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    BiensComponent,
    ClientsComponent,
    ListeClientComponent,
    RegisterClientComponent,
    ListeBiensComponent,
    RegisterBiensComponent,
    LocationComponent,
    ListeLocationComponent,
    RegisterLocationComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule . initializeApp ( environment . firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
