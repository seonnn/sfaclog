import { MouseEventHandler } from 'react';
import { Avatar } from '../../Avatar';
import { RoundButton, SquareButton } from '../../Button';
import { cn } from '../../../utils';

export interface ProfileCardProps {
  width?: number;
  avatar: string;
  name: string;
  description: string;
  following: number;
  follower: number;
  github?: string;
  instgram?: string;
  facebook?: string;
  isMine?: boolean;
  onClickFollow?: MouseEventHandler<HTMLButtonElement>;
  onClickEdit?: MouseEventHandler<HTMLButtonElement>;
}

export const ProfileCard = ({
  width,
  avatar,
  name,
  description,
  following,
  follower,
  github,
  instgram,
  facebook,
  isMine,
  onClickFollow,
  onClickEdit,
}: ProfileCardProps) => {
  return (
    <div
      className={cn('flex items-center w-full max-h-[150px]')}
      style={{ maxWidth: width }}
    >
      <Avatar src={avatar} size='large' styles='mr-[30px]' />
      <div className='flex flex-col gap-[15px] w-full h-full whitespace-pre-wrap'>
        <div className='flex items-center gap-3 overflow-hidden'>
          <p className='text-h2 line-clamp-1'>{name}</p>
          {isMine || (
            <RoundButton
              className='min-w-[67px]'
              size='xs'
              theme='tertiary'
              onClick={onClickFollow}
            >
              팔로우
            </RoundButton>
          )}
        </div>
        <p className='text-body2 text-neutral-60 line-clamp-5'>{description}</p>
      </div>
      <div className='flex flex-col items-center gap-[15px] min-w-[125px] ml-[75px]'>
        <div className='flex justify-start self-start gap-[10px]'>
          {github && (
            <a href={github} target='_blank'>
              <img className='w-[35px] h-[35px]' src='/images/sns/github.svg' />
            </a>
          )}
          {instgram && (
            <a href={instgram} target='_blank'>
              <img
                className='w-[35px] h-[35px]'
                src='/images/sns/instagram.svg'
              />
            </a>
          )}
          {facebook && (
            <a href={facebook} target='_blank'>
              <img
                className='w-[35px] h-[35px]'
                src='/images/sns/facebook.svg'
              />
            </a>
          )}
        </div>
        <div className='flex gap-[30px]'>
          <div className='flex flex-col items-center gap-[5px]'>
            <p className='text-body2'>팔로워</p>
            <span className='text-body1_bold'>{follower}</span>
          </div>
          <div className='flex flex-col items-center gap-[5px]'>
            <p className='text-body2'>팔로잉</p>
            <span className='text-body1_bold'>{following}</span>
          </div>
        </div>
        <SquareButton
          className='w-full border border-neutral-10 bg-white text-primary-100'
          onClick={onClickEdit}
        >
          {isMine ? '프로필 편집' : '작업 제안하기'}
        </SquareButton>
      </div>
    </div>
  );
};