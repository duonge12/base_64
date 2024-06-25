import React, { useState } from 'react';
import Page from './Page';
const MultiplePages = ({ children, title, description }) => {
  const [activePage, setActivePage] = useState(''); // State để lưu trạng thái trang đang active

  const handleClick = (page) => {
    setActivePage(page); // Cập nhật state để hiển thị trang tương ứng
  };

  return (
    <div id='wrapper'>
      <h1 className="main-title">{title}</h1>
      <h3 className="main-title_description">{description}</h3>
      <button className='nav_bttn first' onClick={() => handleClick('text')}>Text</button>
      <button className='nav_bttn second' onClick={() => handleClick('image')}>Image</button>
     

     
      {activePage === 'text' && <Page name="text" />}
      {activePage === 'image' && <Page name="image" />}
      

     
    </div>
  );
};

export default MultiplePages;
