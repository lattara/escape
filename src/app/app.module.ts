import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LpAnimationComponent } from './components/lp-animation/lp-animation.component';
import { MatDialogModule } from '@angular/material';

import { LivingroomComponent } from './components/livingroom/livingroom.component';
import { FrontDirective } from './shared/front.directive';
import { LivingroomplaceComponent } from './pages/livingroomplace/livingroomplace.component';
import { BedroomComponent } from './pages/bedroom/bedroom.component';
import { ExitComponent } from './pages/exit/exit.component';
import { LooseComponent } from './pages/loose/loose.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LpAnimationComponent,
    LivingroomComponent,
    FrontDirective,
    LivingroomplaceComponent,
    BedroomComponent,
    ExitComponent,
    LooseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [LivingroomComponent]
})
export class AppModule { }
