// Define the type of context used in the Outlet
type GameContext = {
  handlePlayerClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  opacity: number;
};
export default GameContext;
