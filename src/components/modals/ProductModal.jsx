import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import useStockCalls from '../../hooks/useStockCalls'
import { flexColumn, modalStyle } from '../../styles/globalStyle'

const ProductModal = ({info, setInfo, open, setOpen}) => {

const {putProduct, postProduct} = useStockCalls();
const { categories, brands } = useSelector()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(info.id) {
      putProduct(info)
    }else {
      postProduct(info)
    }
    setInfo({});
  }

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name] : e.target.value})
  }

  return (
    <Modal
    open={open}
    onClose={() => {
      setOpen(false);
      setInfo({})
    }}
    >
      <Box sx={modalStyle}>
        <Box sx={flexColumn} component="form" onSubmit={handleSubmit} >
          <FormControl fullWidth>
            <InputLabel variant='outlined' id='category-select' >
              Category
            </InputLabel>
            <Select
              labelId='category-select'
              label="Category"
              id="firm-select"
              name="category_id"
              value={info?.category_id || ""} //! info varsa category id sini al bu varsa bunu al yoksa boş ata
              onChange={handleChange}
              required
            >
            {categories?.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              )
            })}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="outlined" id="brand-select">
              Brands
            </InputLabel>
            <Select
              labelId="brand-select"
              label="Brand"
              id="brand-select"
              name="brand_id"
              value={info?.brand_id || ""}
              onChange={handleChange}
              required
            >
              {brands?.map((brand) => {
                return (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            label="Product Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name || ""}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained" size="large">
            Add New Product
          </Button>

        </Box>
      </Box>
    </Modal>
  )
}

export default ProductModal