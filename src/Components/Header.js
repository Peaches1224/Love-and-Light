import React from 'react';
import Image from 'react-bootstrap/Image'
import HeaderImg from '../images/HeaderImg.jpeg';

export default function Header() {
  return (
    <div>
      <Image src={HeaderImg} fluid />
    </div>
  );
}