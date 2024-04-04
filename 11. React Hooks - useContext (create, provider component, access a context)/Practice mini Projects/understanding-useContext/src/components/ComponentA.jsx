import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
  return (
    <div className="">
        <div className='border-2 border-black rounded-md p-4'>
            <h1 className="text-4xl text-center font-bold underline">Component A</h1>
            <ComponentB/>
        </div>
    
    </div>
  )
}

export default ComponentA