import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import ProductModal from '../components/modals/ProductModal';
import ProductsTable from '../components/tables/ProductsTable';


const Products = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained">
        New Product
      </Button>

      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      <ProductsTable/>
    </Box>
  )
}

export default Products