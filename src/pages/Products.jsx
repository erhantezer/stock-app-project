import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductModal from '../components/modals/ProductModal';
import MultiSelect from '../components/MultiSelect';
import ProductsTable from '../components/tables/ProductsTable';
import useStockCalls from '../hooks/useStockCalls';


const Products = () => {
  const { getProCatBrands } = useStockCalls()
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const { products, brands } = useSelector((state) => state.stock);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);



  useEffect(() => {
    getProCatBrands();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>

      <MultiSelect
        data1={brands}
        data2={products}
        key1="name"
        key2="brand"
        firstNames={selectedBrands}
        setFirstNames={setSelectedBrands}
        setSecondNames={setSelectedProducts}
      />

      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      <ProductsTable selectedBrands={selectedBrands} selectedProducts={selectedProducts} />
    </Box>
  )
}

export default Products