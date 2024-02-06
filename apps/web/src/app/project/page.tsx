'use client';
import Image from 'next/image';
import { useState } from 'react';
import HotCard from './(components)/HotCard';
import {
  ProjectCard,
  RoundButton,
  SelectBox,
  SelectChipBox,
  SfacfolioCard,
  UserCard,
} from 'sfac-design-kit';
import Carousel from '@/components/Carousel';

const projects = [
  {
    title: '프로젝트 1',
    description: '나를 찾아가는 한 문장 글쓰기 앱',
    statuses: ['기획 ✅', '디자인 ❌'],
    imageUrl: '/images/gray_box.svg',
  },
  {
    title: '프로젝트 2',
    description: '두 번째 프로젝트 설명',
    statuses: ['기획 ✅', '디자인 ✅'],
    imageUrl: '/images/gray_box.svg',
  },
];

const Project = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrev = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentProject = projects[currentProjectIndex];

  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: '데이터', label: '데이터' },
    { value: '부트캠프', label: '부트캠프' },
  ];

  return (
    <div className='mb-[200px] '>
      <Carousel
        options={{
          align: 'start',
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          loop: true,
        }}
        isPageButton={true}
        className=' bg-primary-10 mb-[50px]'
      >
        {projects.map((project, index) => (
          <div key={index}>
            <HotCard
              description={project.description}
              statuses={project.statuses}
              imageUrl={project.imageUrl}
              title={project.title}
            />
          </div>
        ))}
      </Carousel>

      <div className='mx-auto container'>
        <section className=' mb-[90px]'>
          <p className=' text-[24px] font-bold text-primary-100 mb-[35px]'>
            스팩폴리오 프로젝트
          </p>
          <div className='flex gap-5'>
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={10}
              isPlanner={true}
              isDesigner={true}
              avatar='/images/avatar.svg'
              name='민들레'
              position='디자이너'
            />
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={7}
              isPlanner={false}
              isDesigner={false}
              avatar='/images/avatar.svg'
              name='민들레'
              position='기획자'
            />
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={10}
              isPlanner={true}
              isDesigner={true}
              avatar='/images/avatar.svg'
              name='민들레'
              position='디자이너'
            />
            <SfacfolioCard
              title='AI 데이팅 어시스턴트 앱 디자인 길어지면 이렇게 ~~~~~~~~~~~~~~~~'
              thumbnail='/images/gray_box.svg'
              likes={7}
              isPlanner={false}
              isDesigner={false}
              avatar='/images/avatar.svg'
              name='민들레'
              position='기획자'
            />
          </div>
        </section>
        <section>
          <div className='flex justify-between mb-[35px]'>
            <p className=' text-[24px] font-bold text-primary-100'>
              스팩로그 프로젝트
            </p>
            <div className='flex'>
              <RoundButton
                headIcon='https://cdn.icon-icons.com/icons2/1639/PNG/512/12123eyes_109574.png'
                theme={'secondary'}
                className='mr-[14px]'
              >
                모집 중만 보기
              </RoundButton>
              <RoundButton theme={'secondary'}>모집 글쓰기</RoundButton>
            </div>
          </div>
          <div className='mb-[35px]'>
            <SelectChipBox title='기술 스택' className='mr-[10px]' />

            <SelectBox
              title='모집 포지션'
              options={options}
              className='mr-[10px]'
            ></SelectBox>
            <SelectBox title='진행방식' options={options}></SelectBox>
          </div>
          <div className='grid grid-cols-4 gap-10'>
            <ProjectCard
              title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
              icons={[
                'images/chipIcon/figma.svg',
                'images/chipIcon/react.svg',
                'images/chipIcon/nodejs.svg',
                'images/chipIcon/mysql.svg',
              ]}
              isRecruit={true}
              deadline='2024.01.31'
              avatar='images/avatar.svg'
              name='asdf'
              likes={77}
              comments={7}
            />
            <ProjectCard
              title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
              icons={[
                'images/chipIcon/figma.svg',
                'images/chipIcon/react.svg',
                'images/chipIcon/nodejs.svg',
                'images/chipIcon/mysql.svg',
              ]}
              isRecruit={false}
              deadline='2024.01.31'
              avatar='images/avatar.svg'
              name='asdf'
              likes={77}
              comments={7}
            />
            <ProjectCard
              title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
              icons={[
                'images/chipIcon/figma.svg',
                'images/chipIcon/react.svg',
                'images/chipIcon/nodejs.svg',
                'images/chipIcon/mysql.svg',
              ]}
              isRecruit={true}
              deadline='2024.01.31'
              avatar='images/avatar.svg'
              name='asdf'
              likes={77}
              comments={7}
            />
            <ProjectCard
              title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
              icons={[
                'images/chipIcon/figma.svg',
                'images/chipIcon/react.svg',
                'images/chipIcon/nodejs.svg',
                'images/chipIcon/mysql.svg',
              ]}
              isRecruit={false}
              deadline='2024.01.31'
              avatar='images/avatar.svg'
              name='asdf'
              likes={77}
              comments={7}
            />
            <ProjectCard
              title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
              icons={[
                'images/chipIcon/figma.svg',
                'images/chipIcon/react.svg',
                'images/chipIcon/nodejs.svg',
                'images/chipIcon/mysql.svg',
              ]}
              isRecruit={true}
              deadline='2024.01.31'
              avatar='images/avatar.svg'
              name='asdf'
              likes={77}
              comments={7}
            />
            <ProjectCard
              title='책 취향 기반 매칭 서비스, 사이드 프로젝트 팀원 모집합니다'
              icons={[
                'images/chipIcon/figma.svg',
                'images/chipIcon/react.svg',
                'images/chipIcon/nodejs.svg',
                'images/chipIcon/mysql.svg',
              ]}
              isRecruit={false}
              deadline='2024.01.31'
              avatar='images/avatar.svg'
              name='asdf'
              likes={77}
              comments={7}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
