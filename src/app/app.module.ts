import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    ServerComponent,
    AppComponent,
    ServersComponent,
    LearningComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
