import {  ModuleWithProviders, NgModule } from '@angular/core';
import { Config, TOKEN_CONFIG } from './models/config';
import { MyVoloLibComponent } from './my-volo-lib.component';



@NgModule({
  declarations: [
    MyVoloLibComponent
  ],
  imports: [
  ],
  exports: [
    MyVoloLibComponent
  ]
})
export class MyVoloLibModule {
  static forRoot(myStr?: string, config?: Config): ModuleWithProviders<MyVoloLibModule> {
    return {
      ngModule: MyVoloLibModule,
      providers: [
        {
          provide: 'string_token',
          multi: false,
          useValue: myStr
        },
        {
          provide: TOKEN_CONFIG,
          multi: false,
          useValue: config
        },
      ]
    }
  }
}
