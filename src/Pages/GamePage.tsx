import { Link, Outlet, useNavigate } from "react-router-dom";
import GameHeader from "../components/GameHeader";
import ShowGameRulesButton from "../components/ShowGameRulesButton";
import { useCallback, useEffect, useState } from "react";
import { useGamemode } from "../Context/GameContext";

// row positions represents the player, column positions represents computer
//  0 = Draw, 1 = Player Wins, -1 = Computer Wins
//  Rock = 0, Paper = 1, Scissors = 2, Lizard = 3, Spock = 4
//  If player uses Rock and Computer uses Scissors then we use the asigned value
//  in 2d array to get the element and use that to determine the outcome
//             R   P  S  L   S
//   Rock     [0, -1, 1, 1, -1],
//   Paper    [1, 0, -1, -1, 1],
//   Scissors [-1, 1, 0, 1, -1],
//   Lizard   [-1, 1, -1, 0, 1],
//   Spock    [1, -1, 1, -1, 0],

const payoffMatrix = [
  [0, -1, 1, 1, -1],
  [1, 0, -1, -1, 1],
  [-1, 1, 0, 1, -1],
  [-1, 1, -1, 0, 1],
  [1, -1, 1, -1, 0],
];

const choices: { [key: number]: string } = {
  0: "Rock",
  1: "Paper",
  2: "Scissors",
  3: "Lizard",
  4: "Spock",
};

function generateRandomNumber(range: number) {
  return Math.floor(Math.random() * range);
}

function getKeyByValue(choices: { [key: number]: string }, value: string) {
  for (let [key, val] of Object.entries(choices)) {
    if (val === value) {
      return Number(key);
    }
  }
}

function GamePage() {
  const selectedGamemode = useGamemode();
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);
  let result: string | undefined = undefined;

  useEffect(() => {
    if (selectedGamemode === undefined) navigate("/");
  }, [selectedGamemode]);

  const handlePlayerClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const target = event.target as HTMLElement;
      if (target.tagName === "BUTTON") {
        const range = selectedGamemode === "classic" ? 3 : 4;
        const playerChoice: string = target.getAttribute("datatype")!;
        const playerIndexInPayOffMatrix: number = getKeyByValue(
          choices,
          playerChoice
        )!;
        const computerIndexInPayOffMatrix: number = generateRandomNumber(range);
        console.log(
          `Player: ${playerChoice}, Computer: ${playerIndexInPayOffMatrix} ${choices[computerIndexInPayOffMatrix]}`
        );
        const outcome =
          payoffMatrix[playerIndexInPayOffMatrix][computerIndexInPayOffMatrix];
        if (outcome === 0) result = "Nobody won";
        else if (outcome === 1) result = "You win";
        else result = "You lose";

        handleRouteChange(
          playerIndexInPayOffMatrix,
          computerIndexInPayOffMatrix
        );
      }
    },
    [result]
  );

  function handleRouteChange(
    playerIndexInPayOffMatrix: number,
    computerIndexInPayOffMatrix: number
  ) {
    // Reduce opacity to 0
    setOpacity(0);

    // Wait for the transition to complete before navigating
    setTimeout(() => {
      navigate("/game/winner", {
        state: {
          player: choices[playerIndexInPayOffMatrix],
          computer: choices[computerIndexInPayOffMatrix],
          result,
        },
      });
      setOpacity(1);
    }, 250); // Adjust the delay to match your transition duration
  }

  return (
    <section className="grid items-start p-6 bg-radial-gradient min-h-svh sm:p-12">
      <GameHeader />
      <Outlet context={{ handlePlayerClick, opacity }} />
      <section className="flex items-center justify-center gap-4 md:justify-end">
        <Link
          to="/"
          className="uppercase bg-white tracking-widest border-2 block py-2.5 px-10 rounded-lg font-semibold hover:bg-transparent hover:text-white transition-colors duration-150"
        >
          Menu
        </Link>
        <ShowGameRulesButton />
      </section>
    </section>
  );
}

export default GamePage;
