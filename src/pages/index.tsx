import Link from 'next/link';
import { Typography, Box, Button } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Cake Shop
      </Typography>
      <Button component={Link} href="/catalog" variant="contained">
        Go to Catalog
      </Button>
    </Box>
  );
}
