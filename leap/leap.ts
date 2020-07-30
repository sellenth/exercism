class Year {
  isDividisbleBy(n: number) {
    return this.year % n === 0;
  }
  constructor(private year: number) {}
}

function isLeapYear(n: number) {
  const year = new Year(n);
  return (
    year.isDividisbleBy(4) &&
    (year.isDividisbleBy(400) || !year.isDividisbleBy(100))
  );
}

export default isLeapYear;
