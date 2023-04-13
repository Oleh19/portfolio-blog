import { FC } from 'react';
import Banner from './components/Banner';
import Feed from './components/Feed';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};

export default App;
