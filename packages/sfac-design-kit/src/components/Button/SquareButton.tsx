import React, { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
export interface SquareButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof SquareButtonVariants> {
  children: React.ReactNode;
  headIcon?: string;
  fullWidth?: boolean;
}

const SquareButtonVariants = cva(
  `flex justify-center items-center rounded-[5px] gap-2.5`,
  {
    variants: {
      size: {
        sm: 'px-[19px] py-2 text-sm font-normal',
        md: 'min-w-[100px] px-[25px] py-4 text-btn text-sm font-semibold',
        lg: 'w-full h-[50px] px-6 text-sm font-semibold',
      },
      theme: {
        primary: 'text-white bg-primary-100',
        secondary: 'text-neutral-50 bg-neutral-10',
        disable: 'text-neutral-40 bg-neutral-10',
      },
    },
    defaultVariants: {
      size: 'sm',
      theme: 'primary',
    },
  },
);

const SquareButton = ({
  children,
  size,
  theme,
  headIcon,
  fullWidth = false,
  className,
  onClick,
}: SquareButtonProps) => {
  return (
    <button
      className={cn(
        SquareButtonVariants({ size, theme, className }),
        fullWidth && 'w-full',
      )}
      onClick={onClick}
    >
      {headIcon && <img src={headIcon} alt='icon' className='w-6 h-6' />}
      {children}
    </button>
  );
};

export default SquareButton;
