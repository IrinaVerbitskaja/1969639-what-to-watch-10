import ChiefScreen from '../../pages/chief-screen/chief-screen';

const film = {
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Fantastic',
  year: 2011,
  src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  alt: 'Fantastic Beasts: The Crimes of Grindelwald'
};

function App(): JSX.Element {
  return <ChiefScreen {...film}/>;
}

export default App;
