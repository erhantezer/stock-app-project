import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FirmCard from '../components/FirmCard';
import { flexCenter } from '../styles/globalStyle';


const BASE_URL = "https://13549.fullstack.clarusway.com";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const [firms, setFirms] = useState([])

  const getFirms = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/stock/firms/`, {
        headers: { Authorization: `Token ${token}` },
      })
      setFirms(data)
      console.log(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getFirms()
  }, []);

  return (
    <Box>
      <Typography variant='h4' color="error" mb={5}>
        Firms
      </Typography>
      <Button variant="contained">
        New Firm
      </Button>

      {firms?.length > 0 && (
        <Grid container sx={flexCenter} mt={3}>
          {firms?.map((firm) => (
            <Grid item key={firm.id}>
              <FirmCard firm={firm}  />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Firms