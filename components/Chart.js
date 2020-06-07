import React from 'react';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const Chart = props => {
    const data = props.data;

    return (
        <AreaChart
            style={{ height: 200, width: '100%', marginHorizontal: 20 }}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            animate={true}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        >
        </AreaChart>
    )

}

export default Chart;