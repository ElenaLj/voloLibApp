import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { Config, TOKEN_CONFIG } from './models/config';

@Component({
  selector: 'lib-my-volo-lib',
  template: `
    <p>
      my-volo-lib works!
      <button (click)="showAlert()">Mostra alert</button>
    </p>
  `,
  styles: [
  ]
})
export class MyVoloLibComponent implements OnInit {

  @Input() myParam1 = "";
  public c: Config = new Config;

  constructor(@Optional() @Inject('string_token') str:string,
              @Optional() @Inject(TOKEN_CONFIG) config:Config) {
    console.log(str);
    console.log(config);
    this.c = config;
  }

  ngOnInit(): void {
  }

  showAlert(){
    alert("Test alert da libreria!" + this.myParam1 + JSON.stringify(this.c));
  }
}
