import { Box, Button, Typography } from '@mui/material';
import ProductModal from '../components/modals/ProductModal';
import ProductsTable from '../components/tables/ProductsTable';


const Products = () => {


  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained">
        New Product
      </Button>

      <ProductModal/>

      <ProductsTable/>
    </Box>
  )
}

export default Products