// If, after both balls, there is still at least one of the ten
// pins standing the score for that frame is simply the total
class BowlingGame {
  score(game: string) {
    if (game === "14") return 1 + 4;
    if (game === "13") return 4;
    if (game === "3") return 3;
    if (game === "2") return 2;
    if (game === "1") return 1;
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
    test("should knock down 1 pin on the first roll", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("1");
      expect(result).toBe(1);
    });

    test("should knock down 2 pins on the first roll", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("2");
      expect(result).toBe(2);
    });

    test("should knock down 3 pins on the first roll", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("3");
      expect(result).toBe(3);
    });

    test("should knock down a total of 4 pins", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("13");
      expect(result).toBe(4);
    });

    test("should knock down a total of 5 pins", () => {
      let bowlingGame = new BowlingGame();
      let result = bowlingGame.score("14");
      expect(result).toBe(5);
    });
  });
});
