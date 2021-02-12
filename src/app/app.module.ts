import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { WEB3PROVIDER } from './shared/services/web3-provider';

export function enableWeb3Provider(provider) {
  return () => {
    provider.enable();  // Ask the user to enable MetaMask at load time.
  };
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        {
          provide: APP_INITIALIZER,
          useFactory: enableWeb3Provider,
          deps: [WEB3PROVIDER],
          multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
