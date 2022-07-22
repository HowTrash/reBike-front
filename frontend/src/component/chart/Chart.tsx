import { ConstructionRounded } from '@mui/icons-material';
import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartdata = [
  {
    trash_kind: '종이', cnt : 20,
  },
  {
    trash_kind: '플라스틱', cnt : 10,
  },
  {
    trash_kind: '캔', cnt : 5,
  },
  {
    trash_kind: '비닐', cnt : 8,
  },
  {
    trash_kind: '유리', cnt : 10,
  },
  {
    trash_kind: 'Page F', cnt : 15,
  },
  {
    trash_kind: 'Page G', cnt : 8,
  },
];

/*
export interface chartData{
  trash_kind:string;
  cnt:number;
}

const chartdata = (props:chartData)=>{
  const {trash_kind, cnt} = props;
  return props;
}
*/
export default class TrashChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={chartdata}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='trash_kind' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='cnt' fill="#759F98" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

