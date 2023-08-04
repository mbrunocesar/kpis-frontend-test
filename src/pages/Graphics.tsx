import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../ProTip';
import { useLocation } from 'react-router';

import { ResponsiveBar } from '@nivo/bar'

import axios from 'axios';


let headcountData = [
  {
    "month": 1,
    "value": 0
  }
];

let turnoverData = [
  {
    month: 1,
    value: 0
  }
];

const LinearBar = (props: any) => {
  return (
    <ResponsiveBar
      data={props.dataSet}
      keys={[props.sideLegend]}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      maxValue={props.maxValue}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: props.sideLegend,
        legendPosition: "middle",
        legendOffset: -40
      }}
    />
  );
};

async function teste() {

}

export default function Graphics(id : any) {
  const urlParts = location.pathname.split("/");
  const user_id = urlParts[urlParts.length - 1];
  const [resultData, resultCall] = useState<any>([])

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:4000/users/get-statistics?user_id=${user_id}&number_of_months=8`
    );
    if (response.data && response.data.headcounts) {
      headcountData = response.data.headcounts
      turnoverData = response.data.turnovers
      return(response.data);

    } else {
      throw new Error('Data coud not be fetched!')
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        resultCall(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div style={{height: "300px"}}>
          <LinearBar
            dataSet={headcountData}
            sideLegend={'value'}
            maxValue={'auto'}/>
        </div>
        <div style={{height: "300px"}}>
          <LinearBar
            dataSet={turnoverData}
            sideLegend={'value'}
            maxValue={100}/>
        </div>
      </Box>
    </Container>
  );
}
