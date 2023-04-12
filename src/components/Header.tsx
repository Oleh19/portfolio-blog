import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Container from './Container';

const Header: FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx('py-navItem', {
      'text-black/30': !isActive,
      'text-black/80': isActive,
    });

  return (
    <header>
      <nav className="px-2 py-4">
        <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="mr-8 text-2xl text-blog-blue"
          >
            Blog
          </Link>
          <ul className="list-none flex">
            <li className="ml-4">
              <NavLink
                to="/"
                className={navLinkClasses}
              >
                Home
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/sign-in"
                className={navLinkClasses}
              >
                Sign In
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/sign-up"
                className={navLinkClasses}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
