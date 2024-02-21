import './App.css';
import ParentToChildPropsPass from './components/ParentToChildPropsPass/Parent';
import GrandParentParentChild from './components/GrandParentParentChild/GrandParent';
import GameRoom from './components/GameRoom/Game.Room';
function App() {
  return (
    <>
      <GameRoom />
      <ParentToChildPropsPass />
      <GrandParentParentChild />
      
    </>
  );
}

export default App;
