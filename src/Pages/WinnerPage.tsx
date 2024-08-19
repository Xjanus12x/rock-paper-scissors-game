import { Link, useLocation } from "react-router-dom";
import rockIcon from "../../public/images/icon-rock.svg";
import paperIcon from "../../public/images/icon-paper.svg";
import scissorsIcon from "../../public/images/icon-scissors.svg";
import lizardIcon from "../../public/images/icon-lizard.svg";
import spockIcon from "../../public/images/icon-spock.svg";
import CircularIconButton from "../components/GameChips";
import { useGamemode, useSetScore } from "../Context/GameContext";
import { useState } from "react";

const choicesData = new Map<string, { icon: string; className: string }>([
  [
    "Rock",
    {
      icon: rockIcon,
      className: "before:shadow-rock-outside bg-rock-gradient",
    },
  ],
  [
    "Paper",
    {
      icon: paperIcon,
      className: "before:shadow-paper-outside  bg-paper-gradient",
    },
  ],
  [
    "Scissors",
    {
      icon: scissorsIcon,
      className: "before:shadow-scissors-outside  bg-scissors-gradient",
    },
  ],
  [
    "Lizard",
    {
      icon: lizardIcon,
      className: "before:shadow-lizard-outside  bg-lizard-gradient",
    },
  ],
  [
    "Spock",
    {
      icon: spockIcon,
      className: "before:shadow-spock-outside  bg-spock-gradient",
    },
  ],
]);

function getChoiceData(choice: string) {
  return choicesData.get(choice)!;
}
function WinnerPage() {
  const {
    state: { result, player, computer },
  } = useLocation();
  const gamemode = useGamemode()!;
  const [isAnimating, setIsAnimating] = useState(true);

  function handleAnimationEnd(
    e: React.AnimationEvent<HTMLButtonElement>,
    winner: boolean
  ) {
    setIsAnimating(false);
    const target = e.currentTarget;
    if (winner) {
      target.classList.add(
        "shadow-rings-1",
        "sm:shadow-rings-2",
        "transition-shadow",
        "duration-300"
      );
    } else {
      target.classList.add("z-10");
    }
  }

  return (
    <section className="self-center py-8">
      <div className="grid max-w-sm grid-cols-3 gap-4 mx-auto md:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid justify-center gap-5 text-center -z-1 md:gap-10">
          <CircularIconButton
            icon={getChoiceData(player).icon}
            alt="Paper"
            className={`result-chip-size bounce ${
              getChoiceData(player).className
            }`}
            imageClassName="border-size-extended-fluid"
            onAnimationEnd={(e) => handleAnimationEnd(e, result === "You win")}
          />
          <p className="z-10 font-semibold text-white uppercase md:order-first sm:text-2xl sm:tracking-widest">
            You picked
          </p>
        </div>
        <div className="grid justify-center col-start-3 gap-5 text-center -z-1 md:gap-10">
          <CircularIconButton
            icon={
              isAnimating
                ? getChoiceData("Rock").icon
                : getChoiceData(computer).icon
            }
            alt="Paper"
            className={`result-chip-size bounce transition-colors duration-1000
        ${
          isAnimating
            ? "bg-gray-500  shadow-hide-outside"
            : getChoiceData(computer).className
        }`}
            imageClassName="border-size-extended-fluid"
            onAnimationEnd={(e) => handleAnimationEnd(e, result === "You lose")}
          />

          <p className="z-10 font-semibold text-white uppercase md:order-first sm:text-2xl sm:tracking-widest">
            The house picked
          </p>
        </div>
        <PlayAgain result={result} gamemode={gamemode} />
      </div>
    </section>
  );
}

function PlayAgain({ result, gamemode }: { result: string; gamemode: string }) {
  const setScore = useSetScore();
  return (
    <div
      className="z-10 grid content-center col-span-3 row-start-2 space-y-5 text-center opacity-0 pointer-events-none max-w-fit md:min-w-full justify-self-center md:col-start-2 md:row-start-1 mt-14 md:col-span-1"
      style={{
        animation: "fadeIn 300ms ease-in-out 1000ms forwards",
      }}
      onAnimationEnd={() => {
        if (result === "You win") {
          setScore((prevScore) => prevScore + 1);
        }
      }}
    >
      <p className="text-5xl font-bold text-white uppercase sm:text-6xl">
        {result}
      </p>
      <Link
        className="py-1.5 font-semibold uppercase transition-all duration-300 bg-white border-2 rounded-md text-rock-light sm:py-2 sm:text-lg tracking-widest text-center hover:bg-transparent hover:text-white"
        to={`/game/${gamemode}`}
      >
        Play again
      </Link>
    </div>
  );
}

export default WinnerPage;
