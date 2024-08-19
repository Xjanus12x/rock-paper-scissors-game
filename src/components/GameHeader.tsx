import classicLogo from "../../public/images/logo.svg";
import extendedLogo from "../../public/images/logo-bonus.svg";
import { useGamemode, useScore } from "../Context/GameContext";


function GameHeader() {
  const score = useScore();
  const selectedMode = useGamemode()!;


  return (
    <header className="flex items-center justify-between border-4 border-headerOutline rounded-lg p-2.5 sm:max-w-screen-md sm:container sm:mx-auto sm:rounded-2xl sm:border-3 sm:p-4 z-10">
      <div className="p-2.5">
        <img
          className="h-16 sm:h-full"
          src={selectedMode === "classic" ? classicLogo : extendedLogo}
          alt={
            selectedMode === "classic"
              ? "Rock, Paper And Scissors Logo"
              : "Rock, Paper, Scissors, Lizard and Spock Logo"
          }
        />
      </div>

      <div className="py-3 text-center bg-white border border-black rounded-md px-7 sm:self-stretch sm:grid sm:place-content-center sm:px-11 sm:rounded-lg">
        <p className="text-xs font-semibold tracking-widest uppercase text-scoreText sm:text-base">
          Score
        </p>
        <p className="text-5xl font-bold text-darkText sm:text-6xl">{score}</p>
      </div>
    </header>
  );
}

export default GameHeader;
