import ReactDOM from "react-dom";
import { useGamemode } from "../Context/GameContext";
import classicRules from "../../public/images/image-rules.svg";
import extendedRules from "../../public/images/image-rules-bonus.svg";
import closeIcon from "../../public/images/icon-close.svg";
import { useEffect, useState } from "react";
function ShowGameRulesButton() {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
     
        <button
          className="uppercase bg-white tracking-widest border-2 block py-2.5 px-10 rounded-lg font-semibold hover:bg-transparent hover:text-white transition-colors duration-150"
          onClick={() => setShowRules(true)}
        >
          Rules
        </button>
    
      {showRules && <Rules setShowRules={setShowRules} />}
    </>
  );
}

function Rules({
  setShowRules,
}: {
  setShowRules: (showRules: boolean) => void;
}) {
  const gamemode = useGamemode();
  const [isAnimating, setIsAnimating] = useState(true);
  const portalRoot = document.getElementById("portal-root");
  useEffect(() => {
    // Trigger entrance animation
    let id = setTimeout(() => setIsAnimating(false), 10);
    return () => {
      clearTimeout(id);
    };
  }, []);
  function handleClose() {
    // Trigger exit animation
    setIsAnimating(true);
    setTimeout(() => {
      setShowRules(false);
    }, 300); // Match duration with CSS transition duration
  }
  return ReactDOM.createPortal(
    <section className="absolute inset-0 z-50 sm:grid md:place-content-center">
      <div
        className={`min-h-full grid items-center p-4 bg-white justify-items-center
        transition-all duration-300 transform md:grid md:grid-cols-2 md:p-14 md:gap-y-5 rounded-xl
        ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      >
        <header className="md:justify-self-start">
          <h2 className="text-3xl font-bold uppercase text-darkText">Rules</h2>
        </header>
        <img
        className="col-span-2"
          src={gamemode === "classic" ? classicRules : extendedRules}
          alt={`${
            gamemode === "classic"
              ? "Rock, Paper and Scissors"
              : "Rock, Paper, Scissors, Lizard, Spock"
          } rules`}
        />
        <button className="md:row-start-1 md:col-start-2 md:justify-self-end" onClick={handleClose}>
          <span className="sr-only">Close rules modal</span>
          <img src={closeIcon} alt="Close icon" />
        </button>
      </div>
    </section>,
    portalRoot!
  );
}

export default ShowGameRulesButton;
