export default class User {
  constructor(public name: string, public accessToken: string) {
    this.name = name;
    this.accessToken = accessToken;
  }
}
