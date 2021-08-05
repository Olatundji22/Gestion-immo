import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BiensComponent } from './biens/biens.component';
import { ListeBiensComponent } from './biens/liste-biens/liste-biens.component';
import { RegisterBiensComponent } from './biens/register-biens/register-biens.component';
import { ClientsComponent } from './clients/clients.component';
import { ListeClientComponent } from './clients/liste-client/liste-client.component';
import { RegisterClientComponent } from './clients/register-client/register-client.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';


const routes: Routes = [
    { path: 'Acceuil', component: AcceuilComponent },
    {path: '', redirectTo: 'Login', pathMatch: 'full' },
    {path: 'Login', component: LoginComponent},
    {path: 'Register', component: RegisterComponent},
    {path: 'Userinfo', component: UserinfoComponent},
    { path: 'Propriétés', 
        component: BiensComponent,
        children: [
            {path: 'Nouveaubiens', component: RegisterBiensComponent},
            {path: 'Listebiens', component: ListeBiensComponent},
        ]
    },

    { path: 'Clients', 
    component: ClientsComponent,
        children: [
            {path: 'Nouveauclient', component: RegisterClientComponent},
            {path: 'Listeclient', component: ListeClientComponent},
        ],
    },

    {
        path:'Locations', component: LocationComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}


