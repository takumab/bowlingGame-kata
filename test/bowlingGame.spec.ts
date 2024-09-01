class BowlingGame {
  score(game: string) {
    return this.calculateRollsFor(game);
  }
  private calculateRollsFor = (game: string) => {
    const rolls = game.split("|").join("");
    const GUTTER_BALL = "-";

    const result = rolls
      .split("")
      .map((roll: string) => {
        if (roll === GUTTER_BALL) return 0;
        return Number(roll);
      })
      .reduce((total: number, roll: number) => total + roll, 0);

    return result;
  };
}

describe("Bowling Game", () => {
  describe("Acceptance", () => {
    test("should bowl a game score of 90", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
      expect(result).toBe(90);
    });
  });

  describe("Unit", () => {
    let bowlingGame: BowlingGame;
    beforeEach(() => {
      bowlingGame = new BowlingGame();
    });

    test.each`
      pins     | expectedResult
      ${"1"}   | ${1}
      ${"2"}   | ${2}
      ${"3"}   | ${3}
      ${"13"}  | ${4}
      ${"14"}  | ${5}
      ${"1-"}  | ${1}
      ${"2-"}  | ${2}
      ${"3-"}  | ${3}
      ${"-1"}  | ${1}
      ${"-2"}  | ${2}
      ${"-3"}  | ${3}
      ${"--"}  | ${0}
      ${"12|"} | ${3}
      ${"34|"} | ${7}
    `(
      "should knock down $pins pin(s) for a total of $expectedResult",
      ({ pins, expectedResult }) => {
        let result = bowlingGame.score(pins);
        expect(result).toEqual(expectedResult);
      },
    );
  });
});
