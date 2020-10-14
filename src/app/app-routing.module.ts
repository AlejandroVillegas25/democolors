import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { ApplicantsComponent } from './dashboard/graphics/applicants/applicants.component';
import { AttentionBySubCentersComponent } from './dashboard/graphics/attention-by-sub-centers/attention-by-sub-centers.component';
import { CaptureUsersComponent } from './dashboard/graphics/capture-users/capture-users.component';
import { DiagnosticCauseComponent } from './dashboard/graphics/diagnostic-cause/diagnostic-cause.component';
import { GraphicsComponent } from './dashboard/graphics/graphics.component';
import { IncidentScheduleComponent } from './dashboard/graphics/incident-schedule/incident-schedule.component';
import { OriginComponent } from './dashboard/graphics/origin/origin.component';
import { PatientDataComponent } from './dashboard/graphics/patient-data/patient-data.component';
import { ReasonForCallComponent } from './dashboard/graphics/reason-for-call/reason-for-call.component';
import { ReferenceHospitalComponent } from './dashboard/graphics/reference-hospital/reference-hospital.component';
import { SupportGroupComponent } from './dashboard/graphics/support-group/support-group.component';
import { FormsAdministrationComponent } from './forms/forms-administration/forms-administration.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'graphics',
        component: GraphicsComponent
      },
      {
        path: 'graphics/Capture-users',
        component: CaptureUsersComponent
      },
      {
        path: 'graphics/Applicants',
        component: ApplicantsComponent
      },
      {
        path: 'graphics/Reason-for-call',
        component: ReasonForCallComponent
      },
      {
        path: 'graphics/Incident-Schedule',
        component: IncidentScheduleComponent
      },
      {
        path: 'graphics/Patient-data',
        component: PatientDataComponent
      },
      {
        path: 'graphics/Origin',
        component: OriginComponent
      },
      {
        path: 'graphics/Diagnostic-cause',
        component: DiagnosticCauseComponent
      },
      {
        path: 'graphics/Reference-hospital',
        component: ReferenceHospitalComponent
      },
      {
        path: 'graphics/Support-group',
        component: SupportGroupComponent
      },
      {
        path: 'graphics/Attention-by-sub-centers',
        component: AttentionBySubCentersComponent
      },
      {
        path: 'forms',
        component: FormsAdministrationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
