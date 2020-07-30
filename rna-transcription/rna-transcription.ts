export type DNAbase = "G" | "C" | "T" | "A";
export type RNAbase = "C" | "G" | "A" | "U";

class Transcriptor {
  conversionChart: Record<DNAbase, RNAbase> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  isDNA(char: string): char is DNAbase {
    return char in this.conversionChart;
  }

  toRna(sequence: string): string {
    return sequence.replace(/./g, (currBase) => {
      if (this.isDNA(currBase)) {
        return this.conversionChart[currBase];
      } else {
        throw new Error("Invalid input DNA.");
      }
    });
  }
}
export default Transcriptor;
