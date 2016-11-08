
export class AppSettings {


  private env: String = 'prod';

  // public static get API_ENDPOINT(): string { return "http://localhost:3000"; }
  

 isProd(): boolean {
    return this.env === 'prod';
  }
}