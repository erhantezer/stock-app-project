import { Box, Button, Grid, Typography } from '@mui/material'
// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FirmCard from '../components/FirmCard';
import FirmModal from '../components/modals/FirmModal';
import useStockCalls from '../hooks/useStockCalls';
import { flexCenter } from '../styles/globalStyle';

// import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";




const Firms = () => {
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});


  // const dispatch = useDispatch();

  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://10001.fullstack.clarusway.com/";

  // const getFirms = async () => {
  //   const url = "firms";
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  // Firms state'inin muhtemel degisiklikler groe
  useEffect(() => {
    getFirms()
  }, []);

  return (
    <Box sx={{textAlign:"center"}}>
      <Typography  variant='h4' color="error" mb={5}>
        Firms
      </Typography>

      <Button 
      variant="contained"
      onClick={() => {
        setInfo({});
        setOpen(true);
      }}
      >
        New Firm
      </Button>

      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {firms?.length > 0 && (
        <Grid container sx={flexCenter} mt={3}>
          {firms?.map((firm) => (
            <Grid item key={firm.id}>
              <FirmCard firm={firm}  setOpen={setOpen} setInfo={setInfo}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Firms