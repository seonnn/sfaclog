'use client';
import HotCard from './(components)/HotCard';
import {
  ProjectCard,
  RoundButton,
  SelectBox,
  SelectChipBox,
  SfacfolioCard,
} from 'sfac-design-kit';
import Carousel from '@/components/Carousel';
import {
  useGetAllUserProfileById,
  useGetProjectData,
} from '@/hooks/useProjectData';

import { useGetSkillData } from '@/hooks/useSkillData';

import Link from 'next/link';

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

export const chipoptions = [
  { value: '/images/chipIcon/javascript.svg', label: 'qz6b1owj3uqn9r5' },
  { value: '/images/chipIcon/django.svg', label: 'no35jb96c0a99fu' },
  { value: '/images/chipIcon/figma.svg', label: 'zzdgc96zp62tq72' },
  { value: '/images/chipIcon/flutter.svg', label: 'ybxro0obp96yi9x' },
  { value: '/images/chipIcon/git.svg', label: 'vhz6lpjibg6ndx5' },
  { value: '/images/chipIcon/java.svg', label: 'hsjq2afn492t44f' },
  { value: '/images/chipIcon/kotlin.svg', label: 'gg48yhn1z33idm5' },
  { value: '/images/chipIcon/mongodb.svg', label: 'nxffwhetf5t3c3e' },
  { value: '/images/chipIcon/mysql.svg', label: 'ibzw6kigzgvyqyg' },
  { value: '/images/chipIcon/nestjs.svg', label: '0yy6wcdiqqna9tr' },
  { value: '/images/chipIcon/nextjs.svg', label: '418yr32qvzzrg3t' },
  { value: '/images/chipIcon/nodejs.svg', label: '6swuug4hf2tu6eo' },
  { value: '/images/chipIcon/react.svg', label: '8cdighbw042w21w' },
  { value: '/images/chipIcon/reactnative.svg', label: 'm80bxz9ezgr7wlm' },
  { value: '/images/chipIcon/spring.svg', label: 'rdns4hj6q1gcno8' },
  { value: '/images/chipIcon/swift.svg', label: 'pepzp0p6ab9vu7u' },
  { value: '/images/chipIcon/typescript.svg', label: 'qpw5ll9u7hikykd' },
  { value: '/images/chipIcon/vue.svg', label: 'h7wvfrlbtc7xjq7' },
  { value: '', label: 'yel9r3y1shjyg8q' },
];

export const process = [
  { label: '온라인', value: 'xgo777ttkdayqfl' },
  { label: '오프라인', value: '81s1l9sgxgg9z2r' },
  { label: '온라인/오프라인', value: '4lcuq9joet135hk' },
];

export const position = [
  { label: '프론트엔드', value: '9f9exe2kmzcoxe6' },
  { label: '백엔드', value: 'p8wp6pnahmb6wvj' },
  { label: '디자이너', value: 'zk0e140xr6ly0p1' },
  { label: 'IOS', value: 'qhxnu0nk8bvakze' },
  { label: 'Android', value: 'es4fkkoxcmz7zoi' },
  { label: '데브옵스', value: 's0c856g8pymem77' },
];
const Project = () => {
  const { data: allProject } = useGetProjectData();

  const allProjectId =
    allProject?.map(proejct => {
      return proejct.id;
    }) || [];

  const allUserId =
    allProject?.map(proejct => {
      return proejct.user_id;
    }) || [];

  // const { data: allUser } = useGetAllUserById(allUserId);

  const { data: allUserProfile } = useGetAllUserProfileById(allUserId);

  const { data: allSkill } = useGetSkillData(allProjectId);
  const allSkillValues = allSkill?.map(projectSkills =>
    projectSkills.map((skill: any) => {
      const foundOption = chipoptions.find(
        option => option.label === skill.skill_id,
      );
      return foundOption ? foundOption.value : '';
    }),
  );

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
              <Link href={'/project/write'}>
                <RoundButton theme={'secondary'}>모집 글쓰기</RoundButton>
              </Link>
            </div>
          </div>
          <div className='mb-[35px]'>
            <SelectChipBox title='기술 스택' className='mr-[10px]' />

            <SelectBox
              title='모집 포지션'
              options={position}
              className='mr-[10px]'
            ></SelectBox>
            <SelectBox title='진행방식' options={process}></SelectBox>
          </div>
          <div className='grid grid-cols-4 gap-10'>
            {allProject?.map((project, index) => (
              <Link
                href={`/project/sfaclogdetail/${project.id}`}
                key={project.id}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  icons={
                    allSkillValues && allSkillValues[index]
                      ? allSkillValues[index]
                      : []
                  }
                  isRecruit={project.is_end}
                  deadline={project.deadline.split(' ')[0]}
                  avatar={
                    allUserProfile && allUserProfile[index]
                      ? allUserProfile[index]
                      : []
                  }
                  name='asdf'
                  likes={project.likes}
                  comments={7}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
