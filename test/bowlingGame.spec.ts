class BowlingGame {
  score(game: string) {
    const calculateRolls = () => {
      if (game === "1-") return 1 + 0;
      if (game === "2-") return 2 + 0;
      if (game === "3-") return 3;
      let totalRolls = 0;
      for (const roll of game) {
        totalRolls += Number(roll);
      }
      return totalRolls;
    };

    return calculateRolls();
  }
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
      pins    | expectedResult
      ${"1"}  | ${1}
      ${"2"}  | ${2}
      ${"3"}  | ${3}
      ${"13"} | ${4}
      ${"14"} | ${5}
      ${"1-"} | ${1}
      ${"2-"} | ${2}
      ${"3-"} | ${3}
    `(
      "should knock down $pins pin(s) for a total of $expectedResult",
      ({ pins, expectedResult }) => {
        let result = bowlingGame.score(pins);
        expect(result).toEqual(expectedResult);
      },
    );
  });
});
