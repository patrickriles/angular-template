import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HowserCoreModule, ReauthIntercepor } from '@howser/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HowserCoreModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ReauthIntercepor, multi: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
