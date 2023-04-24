import { FC, PropsWithChildren } from 'react';
import Container from './Container';
import Header from './Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='py-5'>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
