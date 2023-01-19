import { Alert, Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BrandCard from '../components/BrandCard';
import BrandModal from '../components/modals/BrandModal';
import useStockCalls from '../hooks/useStockCalls';
import { flexCenter } from "../styles/globalStyle";

const Brands = () => {
  const { getBrands } = useStockCalls();
  const { brands, loading } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getBrands()
  }, []);

  return (
    <Box>
      <Typography variant='h4' color="error" mb={2} >
        Brands
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
          setInfo({});
        }}
      >
        New Brand
      </Button>

      <BrandModal info={info} setInfo={setInfo} open={open} setOpen={setOpen} />

      {!loading && !brands?.length && (
        <Alert severity="warning" sx={{ mt: 4, width: "50%" }}>
          There is no brand to show
        </Alert>
      )}

      {brands?.length > 0 && (
        <Grid container sx={flexCenter} mt={4}>
          {brands?.map((brand) => (
            <Grid item>
              <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}

    </Box>
  )
}

export default Brands