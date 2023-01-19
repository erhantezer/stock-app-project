import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { arrowStyle, btnHoverStyle } from "../../styles/globalStyle";
import { Typography } from "@mui/material";




const ProductsTable = ({ selectedProducts, selectedBrands }) => {



  //? Verilen item secilen brand'larin icerisinde varsa true dondurur
  //? VEYA hic brand secilmemisse true dondurur.aksinde false dondurur.
  //? bu fonksiyon filter() icerisinde yazilacagi icin false dondurmesi
  //? durumunda filter bir suzme yapmamis olur.


  return (
    <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Box sx={arrowStyle} >
                <Typography variant="body" noWrap>
                  #
                </Typography>
                
              </Box>
            </TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">
              <Box sx={arrowStyle} >
                <Typography variant="body" noWrap>
                  Brand
                </Typography>
                
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box sx={arrowStyle} >
                <Typography variant="body" noWrap>
                  Name
                </Typography>

              </Box>
            </TableCell>
            <TableCell align="center">
              <Box sx={arrowStyle} >
                <Typography variant="body" noWrap>
                  Stock
                </Typography>

              </Box>
            </TableCell>
            <TableCell align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell
                  align="center"
                  
                >
                  <DeleteForeverIcon sx={btnHoverStyle} />
                </TableCell>
              </TableRow>
            
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
