import Chip from "./GameChips";
import paperIcon from "../../public/images/icon-paper.svg";
import scissorsIcon from "../../public/images/icon-scissors.svg";
import rockIcon from "../../public/images/icon-rock.svg";
import spockIcon from "../../public/images/icon-spock.svg";
import lizardIcon from "../../public/images/icon-lizard.svg";
import { useOutletContext, useParams } from "react-router-dom";
import GameContext from "../Model/GameContext";

export default function CreateGame() {
  const { gamemode } = useParams<{ gamemode: string }>(); // Get the gamemode parameter
  const { handlePlayerClick, opacity } = useOutletContext<GameContext>();
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLButtonElement>) => {
    const classList = (e.target as HTMLButtonElement).classList;
    classList.remove("serve-chip");
  };

  return (
    <section
      className="self-center py-8"
      style={{
        opacity: opacity,
        transition: "opacity 250ms ease-in-out", // Smooth transition
      }}
    >
      {gamemode === "classic" ? (
        <Classic
          handlePlayerClick={handlePlayerClick}
          handleAnimationEnd={handleAnimationEnd}
        />
      ) : (
        <Extended
          handlePlayerClick={handlePlayerClick}
          handleAnimationEnd={handleAnimationEnd}
        />
      )}
    </section>
  );
}

type GameProps = {
  handlePlayerClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleAnimationEnd: (e: React.AnimationEvent<HTMLButtonElement>) => void;
};

function Classic({ handlePlayerClick, handleAnimationEnd }: GameProps) {
  return (
    <div
      className="grid grid-cols-2 mx-auto bg-center bg-no-repeat gap-x-10 gap-y-4 bg-triangle bg-[length:70%_60%]  max-w-fit sm:gap-x-20 sm:gap-y-7 choices-container"
      onClick={handlePlayerClick}
    >
      <Chip
        datatype="Paper"
        icon={paperIcon}
        alt="Paper icon"
        className="transition-all duration-300 bg-paper-gradient before:shadow-paper-outside focus-visible:-translate-y-2 hover:-translate-y-2 justify-self-end serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 chip-size-classic"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />
      <Chip
        datatype="Scissors"
        icon={scissorsIcon}
        alt="Scissors icon"
        className="duration-300 bg-scissors-gradient before:shadow-scissors-outside justify-self-start focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 chip-size-classic"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />
      <Chip
        datatype="Rock"
        icon={rockIcon}
        alt="Rock"
        className="col-span-2 duration-300 bg-rock-gradient before:shadow-rock-outside justify-self-center focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 chip-size-classic"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}

function Extended({ handlePlayerClick, handleAnimationEnd }: GameProps) {
  return (
    <div
      className="grid grid-cols-3 gap-4 sm:gap-0 mx-auto bg-center bg-no-repeat min-w-min choices-container bg-[length:80%] max-w-fit bg-pentagon"
      onClick={handlePlayerClick}
    >
      <Chip
        datatype="Scissors"
        icon={scissorsIcon}
        alt="Scissors icon"
        className="col-span-3 transition-all duration-300 bg-scissors-gradient before:shadow-scissors-outside focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 justify-self-center chip-size-extended"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />

      <Chip
        datatype="Spock"
        icon={spockIcon}
        alt="Spock icon"
        className="duration-300 bg-spock-gradient before:shadow-spock-outside justify-self-start focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 chip-size-extended -top-8"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />
      <Chip
        datatype="Paper"
        icon={paperIcon}
        alt="Paper icon"
        className="col-start-3 duration-300 bg-paper-gradient before:shadow-paper-outside focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 chip-size-extended -top-8"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />

      <Chip
        datatype="Lizard"
        icon={lizardIcon}
        alt="Lizard icon"
        className="left-0 duration-300 bg-lizard-gradient before:shadow-lizard-outside focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 chip-size-extended"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />

      <Chip
        datatype="Rock"
        icon={rockIcon}
        alt="Rock icon"
        className="right-0 col-start-3 duration-300 bg-rock-gradient before:shadow-rock-outside focus-visible:-translate-y-2 hover:-translate-y-2 serve-chip hover:shadow-rings-1 focus-visible:shadow-rings-1 focus-visible:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-8 justify-self-end chip-size-extended"
        imageClassName="border-size-fluid"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}
