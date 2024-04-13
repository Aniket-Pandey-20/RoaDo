import React,{useState}from 'react'
import './Home.css';

import Sidebar from '../component/Sidebar';
import NavBar from '../component/NavBar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LineChart } from '@mui/x-charts/LineChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Zepplin', 159,'Active', 24, 4.0),
  createData('Figma', 237, 'Cancled', 37, 4.3),
  createData('Meta', 262, 'Pending', 24, 6.0),
  createData('Angular', 305, 'Active', 67, 4.3),
  createData('Vue', 356, 'Pending', 49, 3.9),
];  

function Home() {
  const [connectNulls, setConnectNulls] = useState(true);
  return (
    <div className="content">
      <Sidebar/>
      <div className="contentBody">
        <NavBar/>
        <div className='dashWrapper'>
          <div className="dashCards row">
            <div class="col-md-4">
              <div class="A card text-white">
                <div class="card-body" >
                  <h4 class="font-weight-normal mb-3"><span>Revenue</span> <AppRegistrationIcon class="icon float-right" /></h4>
                  <h2 class="mb-5">10000</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="B card text-white">
                <div class="card-body">
                  <h4 class="font-weight-normal mb-3"><span style={{letterSpacing:'0.28px'}}>Users</span> <FactCheckOutlinedIcon class="icon float-right" /></h4>
                  <h2 class="mb-5">10000</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="C card text-white">
                <div class="card-body" >
                  <h4 class="font-weight-normal mb-3"><span>New Signups</span> <UnpublishedOutlinedIcon class="icon float-right"/></h4>
                  <h2 class="mb-5">100000</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="B card text-white">
                <div class="card-body">
                  <h4 class="font-weight-normal mb-3"><span>Retention</span> <FactCheckOutlinedIcon class="icon float-right" /></h4>
                  <h2 class="mb-5">10000</h2>
                </div>
              </div>
            </div>
          </div>  

          <Stack sx={{ width: '100%' }} style={{marginTop:'50px'}}>
            <h1>Performance</h1>
      <FormControlLabel
        checked={connectNulls}
        control={
          <Checkbox onChange={(event) => setConnectNulls(event.target.checked)} />
        }
        label="connectNulls"
        labelPlacement="end"
      />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
        series={[
          {
            data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
          },
          {
            data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
            connectNulls,
            area: true,
          },
        ]}
        height={200}
        margin={{ top: 10, bottom: 20 }}
        skipAnimation
      />
          </Stack>

          <TableContainer component={Paper} style={{marginTop:'50px'}}>
            <h1>Installed App</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Source</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">UseId</TableCell>
            <TableCell align="right">Joined</TableCell>
            <TableCell align="right">Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
      </div>
    </div>
  )
}

export default Home