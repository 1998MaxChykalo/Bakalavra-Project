import * as React from 'react';
import { Button } from 'antd'
import { Link } from 'react-router-dom';
export const HomePage: React.FC = () => {
  return (
    <div className='col-5 col-md-7 col-sm-12 mx-auto text-center'>
      <h2 className='mt-3'>Hello from Home page</h2>
      <p className='h3 col-12 my-5'>
        Даний веб ресурс допоможе вам оцінити дружність
        та виявити лідерів у колективі за заданою йому інформацією.
      </p>
      <Link to='/matrix'>
        <Button size='large' className='col-6 col-sm-8 col-xs-12'>
          Перейти до введення даних
      </Button>
      </Link>
    </div>
  );
}