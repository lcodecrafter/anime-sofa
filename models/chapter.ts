export default class chapter {
  constructor(
    public number: number,
    public link: string,
    public name?: string
  ) {
    this.number = number;
    this.link = link;
    if (name) {
      this.name = name;
    }
  }
}
