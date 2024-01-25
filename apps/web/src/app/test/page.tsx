import React from 'react';
// import { BarButton, Button } from '@ui/Button';
import { Button, BarButton, RDTestButton } from 'sfac-design-kit';

const page = () => {
  return (
    <div className='ml-5'>
      <BarButton theme='primary'>버튼이요</BarButton>
      <BarButton theme='neutral'>버튼이요</BarButton>
      <RDTestButton />
    </div>
  );
};

export default page;