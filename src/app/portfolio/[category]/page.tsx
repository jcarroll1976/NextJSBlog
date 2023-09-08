import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react'

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
        <div className='category-content'></div>
        <div className='category-imgContainer'></div>
      </div>
    </div>
  )
}

export default Category