// If, after both balls, there is still at least one of the ten
// pins standing the score for that frame is simply the total
class BowlingGame {
  score(game: string) {
    if (game === "2") return 2;
    return 1;
  }
}

// number of pins knocked down in those two balls.
describe("Bowling Game", () => {
  describe("Acceptance", () => {
    test("should bowl a game score of 90", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
      expect(result).toBe(90);
    });
  });

  describe("Unit", () => {
    test("should knocked down 1 pin on the first roll", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("1");
      expect(result).toBe(1);
    });

    test("should knocked down 2 pins on the first roll", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("2");
      expect(result).toBe(2);
    });
  });
});
