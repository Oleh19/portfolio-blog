import { FC } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';

interface Props {}

const App: FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default App;
