import { useCartStore } from '../model/store';
import { Box, Typography } from '@mui/material';

export const Cart = () => {
  const items = useCartStore((state) => state.items);

  return (
    <Box>
      <Typography variant="h4">Cart</Typography>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Box>
  );
};
