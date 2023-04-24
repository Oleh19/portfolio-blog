import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../layouts/Container';

const Header: FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx('py-navItem', {
      'text-black/30': !isActive,
      'text-black/80': isActive,
    });

  const navMenu = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '/sign-in',
      title: 'Sign In',
    },
    {
      link: '/sign-up',
      title: 'Sign Up',
    },
  ];

  return (
    <header>
      <nav className="px-2 pb-5">
        <Container>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="mr-8 text-2xl text-blog-blue bg-none"
            >
              Blog
            </Link>
            <ul className="list-none flex">
              {navMenu.map((obj, index) => (
                <li
                  className="ml-4"
                  key={index}
                >
                  <NavLink
                    to={obj.link}
                    className={navLinkClasses}
                    end
                  >
                    {obj.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
