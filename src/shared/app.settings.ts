'use strict';

// export var sep='/';
// export var version: string="22.2.2"; 
export class AppSettings {

  public version: string="1.0.0";
  private env: String = 'prod';

  // public static get API_ENDPOINT(): string { return "http://localhost:3000"; }
  

 isProd(): boolean {
    return this.env === 'prod';
  }
}