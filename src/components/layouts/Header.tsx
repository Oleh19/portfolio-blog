import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../layouts/Container';
import { useAuth } from '../../hooks/useAuth';

const Header: FC = () => {
  const { isLoggedIn, logOut } = useAuth();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx('py-navItem', {
      'text-black/30': !isActive,
      'text-black/80': isActive,
    });

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
              <li className="ml-4">
                <NavLink
                  to="/"
                  className={navLinkClasses}
                  end
                >
                  Home
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li className="ml-4">
                  <NavLink
                    to="/"
                    onClick={logOut}
                    className={navLinkClasses}
                    end
                  >
                    Log Out
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="ml-4">
                    <NavLink
                      to="/sign-up"
                      className={navLinkClasses}
                      end
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink
                      to="/sign-in"
                      className={navLinkClasses}
                      end
                    >
                      Sign In
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
