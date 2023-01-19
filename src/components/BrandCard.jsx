import { Card, CardActions, CardHeader, CardMedia } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle, flex } from '../styles/globalStyle';
import useStockCalls from '../hooks/useStockCalls';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BrandCard = ({ brand, setOpen, setInfo }) => {
  const { deleteBrand } = useStockCalls();

  return (
    <Card
    elevation={10}
    sx={{
      p: 2,
      width: "300px",
      height: "400px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardHeader title={brand?.name} />

    <CardMedia
      image={brand?.image}
      sx={{ p: 1, objectFit: "contain", height: "250px" }}
      component="img"
      alt="brand-img"
    />

    <CardActions sx={flex}>
      <EditIcon
        sx={btnHoverStyle}
        onClick={() => {
          setInfo(brand);
          setOpen(true);
        }}
      />
      <DeleteOutlineIcon
        sx={btnHoverStyle}
        onClick={() => deleteBrand(brand.id)}
      />
    </CardActions>
  </Card>
  )
}

export default BrandCard