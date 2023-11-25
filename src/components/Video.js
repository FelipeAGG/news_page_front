// Video.js
import React from 'react';
import { Box } from '@mui/material';

const Video = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" paddingTop={10} paddingBottom={10} >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Video Title"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default Video;
