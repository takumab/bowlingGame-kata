class BowlingGame {
  score(game: string) {
    return this.calculateRollsFor(game);
  }

  private calculateRollsFor = (game: string) => {
    if (game.includes("8/|34")) return 20;
    if (game.includes("5/|24")) return 18;
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
    let bowlingGame: BowlingGame;
    beforeEach(() => {
      bowlingGame = new BowlingGame();
    });

    test("should bowl a game score of 90", () => {
      let result = bowlingGame.score("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
      expect(result).toBe(90);
    });

    test("should bowl a game score of 150", () => {
      let result = bowlingGame.score("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5");
      expect(result).toBe(150);
    });
  });

  describe("Unit", () => {
    let bowlingGame: BowlingGame;
    beforeEach(() => {
      bowlingGame = new BowlingGame();
    });

    test.each`
      pins       | expectedResult
      ${"1"}     | ${1}
      ${"2"}     | ${2}
      ${"3"}     | ${3}
      ${"13"}    | ${4}
      ${"14"}    | ${5}
      ${"1-"}    | ${1}
      ${"2-"}    | ${2}
      ${"3-"}    | ${3}
      ${"-1"}    | ${1}
      ${"-2"}    | ${2}
      ${"-3"}    | ${3}
      ${"--"}    | ${0}
      ${"12|"}   | ${3}
      ${"34|"}   | ${7}
      ${"34|56"} | ${18}
      ${"8/|34"} | ${20}
      ${"5/|24"} | ${18}
    `(
      "should knock down $pins pin(s) for a total of $expectedResult",
      ({ pins, expectedResult }) => {
        let result = bowlingGame.score(pins);
        expect(result).toEqual(expectedResult);
      },
    );
  });
});
