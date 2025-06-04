import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

export default function CakePage() {
  const { query } = useRouter();

  return (
    <Box>
      <Typography variant="h4">Cake {query.id}</Typography>
    </Box>
  );
}
