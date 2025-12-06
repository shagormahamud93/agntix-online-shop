"use client";
import BackToTopArea from '../common/scroll-to-top/BackToTopArea';
import { animationCreate } from '../utils/Wow';
import { useEffect } from 'react';
import { ReactNode } from 'react';

const Wrapper = ({children}: { children: ReactNode }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  },[])
  return (
    <>
      {children}
      <BackToTopArea/>
    </>
  );
};

export default Wrapper;