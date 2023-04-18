import { FC, PropsWithChildren } from 'react';
import Container from './Container';
import Header from './Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
