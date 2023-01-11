import season from "./season";

export default class serie {
  constructor(
    public title: string,
    public description: string,
    public seasons: season[] = []
  ) {
    this.title = title;
    this.description = description;
    this.seasons = seasons;
  }
}
