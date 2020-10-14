import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './authentication/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';

import {ReactiveFormsModule} from '@angular/forms';
import { GraphicsComponent } from './dashboard/graphics/graphics.component';
import { CaptureUsersComponent } from './dashboard/graphics/capture-users/capture-users.component';
import { ApplicantsComponent } from './dashboard/graphics/applicants/applicants.component';
import { ReasonForCallComponent } from './dashboard/graphics/reason-for-call/reason-for-call.component';
import { IncidentScheduleComponent } from './dashboard/graphics/incident-schedule/incident-schedule.component';
import { PatientDataComponent } from './dashboard/graphics/patient-data/patient-data.component';
import { OriginComponent } from './dashboard/graphics/origin/origin.component';
import { DiagnosticCauseComponent } from './dashboard/graphics/diagnostic-cause/diagnostic-cause.component';
import { ReferenceHospitalComponent } from './dashboard/graphics/reference-hospital/reference-hospital.component';
import { SupportGroupComponent } from './dashboard/graphics/support-group/support-group.component';
import { AttentionBySubCentersComponent } from './dashboard/graphics/attention-by-sub-centers/attention-by-sub-centers.component';

import { FormsAdministrationComponent } from './forms/forms-administration/forms-administration.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraphicsComponent,
    CaptureUsersComponent,
    ApplicantsComponent,
    ReasonForCallComponent,
    IncidentScheduleComponent,
    PatientDataComponent,
    OriginComponent,
    DiagnosticCauseComponent,
    ReferenceHospitalComponent,
    SupportGroupComponent,
    AttentionBySubCentersComponent,
    FormsAdministrationComponent 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
