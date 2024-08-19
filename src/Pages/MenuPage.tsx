import gameOneLogo from "../../public/images/logo.svg";
import gameTwoLogo from "../../public/images/logo-bonus.svg";
import { Link } from "react-router-dom";
import { useSetGamemode } from "../Context/GameContext";

function MenuPage() {
  const setGamemode = useSetGamemode();
  return (
    <div className="grid bg-radial-gradient min-h-svh place-content-center ">
      <div className="grid gap-4 p-8 border-8 rounded-md max-w-fit border-headerOutline">
        <h1 className="text-2xl text-white uppercase">Choose Game Mode</h1>
        <Link
          className="transition-transform duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-dashed focus-visible:outline-white outline-offset-4 outline-2"
          to="/game/classic"
          onClick={() => setGamemode("classic")}
        >
          <span className="sr-only">
            Choose Rock, Paper And Scissors game mode
          </span>
          <img
            className="filter hover:brightness-0 hover:invert"
            src={gameOneLogo}
            alt="Game one logo"
          />
        </Link>
        <Link
          className="transition-transform duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-dashed focus-visible:outline-white outline-offset-4 outline-2"
          to="/game/extended"
          onClick={() => setGamemode("extended")}
        >
          <span className="sr-only">
            Choose Rock, Paper, Scissors, Lizard, Spock game mode
          </span>
          <img
            className="size-36 filter hover:brightness-0 hover:invert"
            src={gameTwoLogo}
            alt="Game two logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default MenuPage;
