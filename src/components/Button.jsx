import React from 'react';

export default function Button({ value, title, onClick, children, classNames }) {

  return (
    <>
      <button  onClick={onClick} value={value} className={`${classNames} button `}>
        {title}
        {children}
      </button>
    </>
  );
}
