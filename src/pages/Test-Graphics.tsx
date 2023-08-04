import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../ProTip';

import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'

const linearData = [
  {
    day: "Monday",
    degress: 59
  },
  {
    day: "Tuesday",
    degress: 61
  },
  {
    day: "Wednesday",
    degress: 55
  },
  {
    day: "Thursday",
    degress: 78
  },
  {
    day: "Friday",
    degress: 71
  },
  {
    day: "Saturday",
    degress: 56
  },
  {
    day: "Sunday",
    degress: 67
  }
];

const pieData = [
  {
    id: "java",
    label: "java",
    value: 195,
    color: "hsl(90, 70%, 50%)"
  },
  {
    id: "erlang",
    label: "erlang",
    value: 419,
    color: "hsl(56, 70%, 50%)"
  },
  {
    id: "ruby",
    label: "ruby",
    value: 407,
    color: "hsl(103, 70%, 50%)"
  },
  {
    id: "haskell",
    label: "haskell",
    value: 474,
    color: "hsl(186, 70%, 50%)"
  },
  {
    id: "go",
    label: "go",
    value: 71,
    color: "hsl(104, 70%, 50%)"
  }
];

const LinearBar = () => {
  return (
    <ResponsiveBar
      data={linearData}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40
      }}
    />
  );
};

const PieBar = () => {
  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
};

export default function Graphics() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div style={{height: "200px"}}>
          <PieBar />
        </div>
        <div style={{height: "200px"}}>
          <LinearBar />
        </div>
      </Box>
    </Container>
  );
}
