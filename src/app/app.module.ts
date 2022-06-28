import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GroupOneComponent } from './group-one/group-one.component';
import { GroupTwoComponent } from './group-two/group-two.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    GroupOneComponent,
    GroupTwoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
