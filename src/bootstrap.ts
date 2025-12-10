import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

(async () => {
  const app = await createApplication({
    providers: appConfig.providers,
});

  const mfe1 = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe-1', mfe1);
})();
