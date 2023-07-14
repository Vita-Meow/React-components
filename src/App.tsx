import React from 'react';
import './App.css'
import Skeleton, { ESkeletonType } from './ components/Skeleton';

function App() {

  return (
    <>
      <div className="card">
          <Skeleton animation type={ESkeletonType.circle} width={50} height={50}/>
          <Skeleton animation type={ESkeletonType.text} width={100} height={20} textLines={2}/>
      </div>
      
    </>
  )
}

export default App
