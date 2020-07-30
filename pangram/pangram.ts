class Pangram {
  private input: string;
  private lettersSet = new Set();
  private ALPHABET_LENGTH = 26;

  isPangram(): boolean {
    this.input.replaceAll(/[a-z]/g, (letter) => {
      this.lettersSet.add(letter);
      return "";
    });
    return this.lettersSet.size === this.ALPHABET_LENGTH;
  }

  constructor(input: string) {
    this.input = input.toLowerCase();
  }
}

export default Pangram;
