import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
  cardsCount: number;
}

function App({title, genre, releaseDate, cardsCount}:AppScreenProps): JSX.Element {
  return (<MainScreen title={title} genre={genre} releaseDate={releaseDate} cardsCount={cardsCount}/>);
}

export default App;
