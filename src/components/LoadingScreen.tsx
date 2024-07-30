import { useIsFetching } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  const isFetching = useIsFetching();
  const display = isFetching ? 'inherit' : 'none';
  return (
    <Box
      sx={{
        position: 'absolute',
        display,
        zIndex: 999,
        top: '45%',
        left: '45%',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
