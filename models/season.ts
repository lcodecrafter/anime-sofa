import chapter from "./Chapter";

export default class season {
  constructor(public number: number, public chapters: chapter[]) {
    this.number = number;
    this.chapters = chapters;
  }
}
