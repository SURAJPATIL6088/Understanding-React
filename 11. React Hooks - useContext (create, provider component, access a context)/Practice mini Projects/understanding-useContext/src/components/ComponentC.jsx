import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = () => {
  return (
    <div className="">
        <div className='border-2 border-black rounded-md p-4'>
            <h1 className="text-4xl text-center font-bold underline">Component C</h1>
            <ComponentD/>
        </div>
        
    </div>
  )
}

export default ComponentC