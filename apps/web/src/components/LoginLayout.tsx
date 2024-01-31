'use client';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';
import Image from 'next/image';

interface CommonLayoutProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

const LoginLayout: React.FC<CommonLayoutProps> = ({
  children,
  title,
  color,
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const pathname = usePathname();
  const isTerm = pathname === '/signup/terms';
  return (
    <div className='flex flex-col justify-center items-center'>
      <Logo />
      <div className='flex justify-center w-[700px] min-h-min-[450px]  bg-white mt-[11.5px] rounded-[40px]'>
        <div
          className={`flex flex-col items-center ${isTerm ? 'mx-[100px]' : 'mx-[160px]'} my-[60px]`}
        >
          <div
            className={`flex ${isTerm ? '' : 'justify-center'} mb-[55px] w-full`}
          >
            {isTerm && (
              <Image
                src='/images/ic_big_arrow.svg'
                alt=''
                width={32}
                height={32}
                className='w-8 h-8 mr-[100px] cursor-pointer'
                onClick={handleGoBack}
              />
            )}
            <p className={` ${color} text-2xl font-bold`}>{title}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
