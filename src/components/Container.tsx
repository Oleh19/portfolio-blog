import { PropsWithChildren } from 'react';
import { FC } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
