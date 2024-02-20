import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  offerCount: number;
}

function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage offerCount={offerCount} />
  );
}

export default App;
