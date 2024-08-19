import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type TGameContext = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  gamemode: string | undefined;
  setGamemode: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const GameContext = React.createContext<TGameContext | null>(null);

export function useScore() {
  return useContext(GameContext)!.score;
}

export function useSetScore() {
  return useContext(GameContext)!.setScore;
}

export function useGamemode() {
  return useContext(GameContext)!.gamemode;
}

export function useSetGamemode() {
  return useContext(GameContext)!.setGamemode;
}

function GameProvider({ children }: PropsWithChildren) {
  const [score, setScore] = useState(0);
  const [gamemode, setGamemode] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    if (gamemode !== undefined) {
      const savedScore = localStorage.getItem(gamemode);
      if (savedScore !== null) setScore(Number(savedScore));
    }
  }, [gamemode]);

  useEffect(() => {
    if (gamemode !== undefined) localStorage.setItem(gamemode, `${score}`);
  }, [gamemode, score]);

  return (
    <GameContext.Provider value={{ gamemode, setGamemode, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
