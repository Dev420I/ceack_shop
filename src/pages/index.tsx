import Link from 'next/link';
import { Typography, Box, Button, Container } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: 8, md: 16 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Cake Shop
        </Typography>
        <Typography variant="h6" paragraph>
          Свежие десерты каждый день
        </Typography>
        <Button
          component={Link}
          href="/catalog"
          variant="contained"
          color="secondary"
          size="large"
        >
          Перейти в каталог
        </Button>
      </Container>
    </Box>
  );
}
