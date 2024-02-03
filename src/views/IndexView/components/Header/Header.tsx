import React from 'react';
import Box from '@mui/material/Box';

export const Header = () => {
  return (
    <Box
      position={'static'}
      component={'img'}
      src={
        '/header/banner.jpg'
      }
      style={{ height: '10%', width: '100%' }}
    />
  );
};
