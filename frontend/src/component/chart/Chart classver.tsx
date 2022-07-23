import { ConstructionRounded } from '@mui/icons-material';
import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  trash_kind: string;
  cnt: number;
}

interface ChartDataList {
  content: Array<ChartData>
}

const trashkind: string = 'a';
const count: number = 1;

class TrashChart extends PureComponent<ChartDataList> {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
  state = {
    content: { [trashkind]: [count] }
  }
  constructor(props: any) {
    super(props);
    this.state.content = props;
  }

  render() {
    console.log("잘 받아왔는지?", this.state.content.content);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={this.state.content.content}
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

export default TrashChart;
