import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { SettingsComponent } from './settings/settings.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path: '', component: JobsComponent},
  {path: 'discover', component: FeedComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'jobs', component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
