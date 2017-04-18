import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBdQmuJ7lwRsc0WrfvbVBouTSVkgV-9Wzw",
    authDomain: "lazy-demi.firebaseapp.com",
    databaseURL: "https://lazy-demi.firebaseio.com",
    projectId: "lazy-demi",
    storageBucket: "lazy-demi.appspot.com",
    messagingSenderId: "848331258275"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
