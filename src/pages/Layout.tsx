import * as React from 'react';
import { Outlet } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        KPIs Test
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const Layout = () => {
  return (
    <>
      <Outlet />

      <Copyright />
    </>
  )
};

export default Layout;
