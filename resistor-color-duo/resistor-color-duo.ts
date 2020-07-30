export type Color = keyof ResistorColor["colorValues"];

export class ResistorColor {
  private colors: Color[];

  colorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  constructor([tens, ones, ...rest?]: [Color, Color, Color[] | null]) {
    this.colors = [tens, ones];
  }

  value = (): number => {
    const [tens, ones] = this.colors;
    return 10 * this.colorValues[tens] + this.colorValues[ones];
  };
}
