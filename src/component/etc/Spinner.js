import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Media(props) {

  return (
    <Box flexDirection={'row'} sx={{ pt: 0.5 , mt: 3}}>
        <Stack>
            <Skeleton variant="rectangular" direction = "row"  width={310} height={200}/>
            <Skeleton width="60%" />
        </Stack>
    </Box>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}