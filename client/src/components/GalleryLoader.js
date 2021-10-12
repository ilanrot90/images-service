import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default React.memo(({ size = 9 }) => {
  const stack = Array.from({ length: size });

  return stack.map((item, idx) => (
    <Skeleton key={idx} variant="rectangular" width={280} height={300} />
  ));
});
