import React from 'react';
import './Skeleton.css'

export enum ESkeletonType {
  rectangle = 'rectangle',
  circle='circle',
  text='text'
}

export interface ISkeleton {
  type?: ESkeletonType;
  textLines?: number;
  width?: number;
  height?: number;
  animation: boolean;

}

const Skeleton : React.FC<ISkeleton>= ({ type, textLines = 3, width, height, animation = true }) => {
  const renderSkeletonShape = () => {
    switch (type) {
      case ESkeletonType.rectangle:
        return <div className={`skeleton-rectangle ${animation ? 'animated' : ''}`} style={{ width, height }} />;
      case ESkeletonType.circle:
        return <div className={`skeleton-circle ${animation ? 'animated' : ''}`} style={{ width, height }} />;
      case ESkeletonType.text:
        return Array.from({ length: textLines }, (_, index) => (
          <div
            key={index}
            className={`skeleton-text ${animation ? 'animated' : ''}`}
            style={{ width, height }}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <div className="skeleton-container">
      {renderSkeletonShape()}
    </div>
  );
};

export default Skeleton;
