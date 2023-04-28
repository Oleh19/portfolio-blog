import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyInput from '../components/UI/MyInput';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MyButton from '../components/UI/MyButton';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(7),
});

const SignUp: FC = () => {
  const { signUp } = useAuth();

  const { register, handleSubmit, formState } = useForm<SignUpFormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      await signUp(values);
      navigate('/');
    } catch (e) {
      toast.error('Something went wrong. Please, try again later');
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center mb-4">Sign Up</h1>
      <p className="text-center mb-4">
        <Link to="/sign-in">Have an account ?</Link>
      </p>
      <form
        className="max-w-xl mx-auto mt-2 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <ul className=" list-disc pl-10">
          {(
            Object.keys(formState.errors) as (keyof typeof formState.errors)[]
          ).map((field) => (
            <li
              key={`error-${field}`}
              className="text-red-500 font-bold first-letter:uppercase "
            >
              {formState.errors[field]!.message}
            </li>
          ))}
        </ul>
        <MyInput
          placeholder="Username"
          {...register('username')}
        />
        <MyInput
          placeholder="Email"
          type="email"
          {...register('email')}
        />
        <MyInput
          placeholder="Password"
          type="password"
          autoComplete="on"
          {...register('password')}
        />
        <div className="flex justify-end">
          <MyButton
            title="Sign Up"
            disabled={formState.isSubmitting}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default SignUp;
