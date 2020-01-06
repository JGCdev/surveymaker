import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestasComponent } from './encuestas.component';
import {EncuestaCreadaComponent  } from './encuesta-creada/encuesta-creada.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VotarComponent } from './votar/votar.component';
import { SharedModule } from '../shared/shared.module';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { StatsComponent } from './stats/stats.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [EncuestasComponent,  EncuestaCreadaComponent, VotarComponent, PlantillaComponent, AjustesComponent, StatsComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EncuestasModule { }
