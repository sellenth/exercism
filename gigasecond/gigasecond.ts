export default class Gigasecond {
  orig_date: Date;
  modified_date: Date;

  constructor(date: Date) {
    this.orig_date = date;
    this.modified_date = new Date(date.getTime() + 10 ** 12);
  }

  public date(): Date {
    return this.modified_date;
  }
}
