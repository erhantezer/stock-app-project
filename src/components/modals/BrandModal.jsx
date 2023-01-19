import { Box, Button, Modal, TextField } from '@mui/material'
import React from 'react'
import useStockCalls from '../../hooks/useStockCalls'
import { flexColumn, modalStyle } from '../../styles/globalStyle'

const BrandModal = ({ open, setOpen, info, setInfo }) => {
  const { postBrand, putBrand } = useStockCalls();

  const handleChange = (e) => {
    setInfo({...info, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if (info.id) {
      putBrand()
    }else {
      postBrand()
    }
  }

  return (
    <Modal
    open={open}
    onClose={() => {
      setOpen(false);
      setInfo({});
    }}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={modalStyle}>
      <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
        <TextField
          label="Brand Name"
          name="name"
          id="name"
          type="text"
          variant="outlined"
          value={info?.name || ""}
          onChange={handleChange}
          required
        />

        <TextField
          label="Image Url"
          name="image"
          id="image"
          type="url"
          variant="outlined"
          value={info?.image || ""}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" size="large">
          Save Brand
        </Button>
      </Box>
    </Box>
  </Modal>
  )
}

export default BrandModal