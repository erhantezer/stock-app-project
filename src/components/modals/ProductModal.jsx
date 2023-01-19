import { Box, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material'
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

        </Box>
      </Box>
    </Modal>
  )
}

export default ProductModal