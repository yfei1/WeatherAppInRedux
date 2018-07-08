import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const Chart = (props) => {
  return (
    <React.Fragment>
      <Sparklines data={props.data} width={100} height={50}>
        <SparklinesLine color={props.color || "blue"} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {_.round(_.mean(props.data), 2)}{props.units}</div>
    </React.Fragment>
  )
}

export default Chart;
