import { SignInOutDTO } from '../api/dto/SignInOut';
import { SignUpOutDTO } from '../api/dto/SignUpOut';
import { selectUser, setUser } from '../store/slices/serviceSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const isLoggedIn = Boolean(user);

  // const [triggerSignInQuery] = useLazySignInQuery();
  const signIn = async (values: SignInOutDTO['user']) => {
    // const { data } = await triggerSignInQuery(values, false);

    // if (!data) {
    //   throw new Error('No data in query');
    // }

    const data = { ...values };

    dispatch(setUser(data));
  };

  // const [triggerSignUpQuery] = useLazySignUpQuery();
  const signUp = async (values: SignUpOutDTO['user']) => {
    // const { data } = await triggerSignUpQuery(values, false);

    // console.log(data);

    // if (!data) {
    //   throw new Error('No data in query');
    // }
    const data = { ...values };

    dispatch(setUser(data));
  };

  const logOut = () => {
    dispatch(setUser(null));
  };

  return { isLoggedIn, signIn, signUp, logOut, user };
};
