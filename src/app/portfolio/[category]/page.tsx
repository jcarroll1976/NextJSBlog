import Button from '@/app/components/Button';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React from 'react';
import "./Category.css"

type Props = {
  params: Params;
  //category: string;
}

function Category({params}: Props) {
  console.log(params);
  return (
    <div className='category-container'>
      <h1 className='category-title'>{params.category}</h1>
      <div className='category-item'>
        <div className='category-content'>
          <h1 className='content-title'>Test</h1>
          <p className="content-description">Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className='category-imgContainer'>
          <Image
          className='category-image'
          fill={true}
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          />
        </div>
      </div>
      <div className='category-item'>
        <div className='category-content'>
          <h1 className='content-title'>Test</h1>
          <p className="content-description">Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className='category-imgContainer'>
          <Image
          className='category-image'
          fill={true}
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          />
        </div>
      </div>
      <div className='category-item'>
        <div className='category-content'>
          <h1 className='content-title'>Test</h1>
          <p className="content-description">Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className='category-imgContainer'>
          <Image
          className='category-image'
          fill={true}
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category