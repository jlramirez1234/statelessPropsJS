import "./App.css";
import characters from './CharacterData';
import Hero from "./Hero/Hero";
import TopCharacterInfo from "./Body/TopCharacterInfo/TopCharactersInfo";
import BottomCharacterInfo from "./Body/BottomCharacterInfo/BottomCharacterInfo";

function App() {
  return (
    <>
      <Hero />
      <TopCharacterInfo characters={characters}/>
      <BottomCharacterInfo characters={characters}/>
    </>
  );
}

export default App;