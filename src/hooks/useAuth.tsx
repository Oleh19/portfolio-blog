import { SignInOutDTO } from '../api/dto/SignInOut';
import { SignUpOutDTO } from '../api/dto/SignUpOut';
import {
  useLazySignInQuery,
  useLazySignUpQuery,
} from '../api/repository/repositoryAuth';
import { selectUser, setUser } from '../store/slices/serviceSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const isLoggedIn = Boolean(user);

  const [triggerSignInQuery] = useLazySignInQuery();
  const signIn = async (values: SignInOutDTO['user']) => {
    const { data } = await triggerSignInQuery(values, false);

    if (!data) {
      throw new Error('No data in query');
    }

    dispatch(setUser(data.user));
  };

  const [triggerSignUpQuery] = useLazySignUpQuery();
  const signUp = async (values: SignUpOutDTO['user']) => {
    const { data } = await triggerSignUpQuery(values, false);

    if (!data) {
      throw new Error('No data in query');
    }

    dispatch(setUser(data.user));
  };

  const logOut = () => {
    dispatch(setUser(null));
  };

  return { isLoggedIn, signIn, signUp, logOut, user };
};
