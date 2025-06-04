import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';

export default function Catalog() {
  const cakes = [
    { id: '1', name: 'Chocolate Cake' },
    { id: '2', name: 'Vanilla Cake' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Catalog
      </Typography>
      <ul>
        {cakes.map((cake) => (
          <li key={cake.id}>
            <Button component={Link} href={`/cakes/${cake.id}`}>{cake.name}</Button>
          </li>
        ))}
      </ul>
    </Box>
  );
}
