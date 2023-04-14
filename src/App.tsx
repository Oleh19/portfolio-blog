import { FC } from 'react';
import Banner from './components/Banner';
import Feed from './components/Feed';
import Header from './components/Header';

const App: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Feed />
    </>
  );
};

export default App;
