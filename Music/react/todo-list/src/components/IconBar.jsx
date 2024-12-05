import React from 'react';
import { IconBoxHorizontal, IconBoxVertical } from './styles/IconBar.styles';

const IconBar = () => {
  return (
    <>
    <IconBoxHorizontal>
      <a className='active' href="#"><i class="fa fa-home"></i></a>
      <a href="#"><i class="fa fa-search"></i></a>
      <a href="#"><i class="fa fa-envelope"></i></a>
      <a href="#"><i class="fa fa-globe"></i></a>
      <a href="#"><i class="fa fa-trash"></i></a>
    </IconBoxHorizontal>


    <IconBoxVertical>
      <a className='active' href="#"><i class="fa fa-home"></i></a>
      <a href="#"><i class="fa fa-search"></i></a>
      <a href="#"><i class="fa fa-envelope"></i></a>
      <a href="#"><i class="fa fa-globe"></i></a>
      <a href="#"><i class="fa fa-trash"></i></a>
    </IconBoxVertical>
    </>
  );
}

export default IconBar;
