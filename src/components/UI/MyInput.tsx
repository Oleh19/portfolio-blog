import { ComponentProps, forwardRef } from 'react';

interface Props {
  placeholder: ComponentProps<'input'>['placeholder'];
  name: ComponentProps<'input'>['name'];
  onChange: ComponentProps<'input'>['onChange'];
  onBlur: ComponentProps<'input'>['onBlur'];
  type?: ComponentProps<'input'>['type'];
  autoComplete?: string;
}

const MyInput = forwardRef<HTMLInputElement, Props>(({ ...Props }, ref) => {
  return (
    <input
      ref={ref}
      {...Props}
      className="border-black/10 border rounded-md px-5 py-3 text-xl w-full"
    />
  );
});

export default MyInput;
