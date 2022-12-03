import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { createContext, CSSProperties, useEffect, useRef, useState } from 'react';
import {
  TimelineChartBody,
  TimelineChartDurationHeader,
  TimelineChartHeaderLabels,
  TimelineChartTaskHeader
} from './TimelineChartParts';

export interface IDimensionCtx {
  width: number;
  height: number;
  chartWidth: number;
  chartHeight: number;
}

const defaultDimensions: IDimensionCtx = {
  width: 0,
  height: 0,
  chartWidth: 0,
  chartHeight: 0
};

export const TimelineChartDimensionCtx = createContext<IDimensionCtx>(defaultDimensions);

interface TimelineChartProps {
  height?: number;
  width?: number;
  rowHeight?: number;
  isDiscrete?: boolean;
}

/**
 * A `TimelineChart` is a data visualization chart that can be used to represent
 * Gantt charts or any other timeline-based visualizations.
 */
const TimelineChart: React.FC<TimelineChartProps> = ({ width, rowHeight }) => {
  const DEFAULT_WIDTH = '100%';
  const TASK_LABEL_WIDTH = 150;
  const DURATION_LABEL_HEIGHT = 50;
  const DEFAULT_ROW_HEIGHT = 25;

  rowHeight = rowHeight != null ? rowHeight : DEFAULT_ROW_HEIGHT;
  const numOfItems = 9;
  const totalDuration = 170;
  const height = rowHeight * numOfItems + DURATION_LABEL_HEIGHT;

  const isDiscrete = true;
  const totalDiscreteDuration = 8;
  const unit = 'ms';

  const style: CSSProperties = {
    height: `${height}px`,
    width: `${width != null ? width + 'px' : DEFAULT_WIDTH}`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    display: 'grid',
    gridTemplateColumns: `${TASK_LABEL_WIDTH}px auto`,
    gap: 0
  };

  const ref = useRef(null);
  const [dimensions, setDimensions] = useState(defaultDimensions);
  const [chartScale, setChartScale] = useState(1);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          chartWidth: entry.contentRect.width - TASK_LABEL_WIDTH,
          chartHeight: entry.contentRect.height - DURATION_LABEL_HEIGHT
        });
        setChartScale(1);
      });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const scaleChartBody = (value: number) => setChartScale(value);

  return (
    <div ref={ref} style={style}>
      <TimelineChartDimensionCtx.Provider value={dimensions}>
        <div style={{ width: TASK_LABEL_WIDTH, height: height }}>
          <TimelineChartHeaderLabels width={TASK_LABEL_WIDTH} height={DURATION_LABEL_HEIGHT} />
          <TimelineChartTaskHeader
            width={TASK_LABEL_WIDTH}
            height={height - DURATION_LABEL_HEIGHT}
            rowHeight={rowHeight}
            numOfItems={numOfItems}
          />
        </div>
        <div style={{ width: dimensions.width - TASK_LABEL_WIDTH, height: height, overflow: 'hidden' }}>
          <TimelineChartDurationHeader
            width={(dimensions.width - TASK_LABEL_WIDTH) * chartScale}
            height={DURATION_LABEL_HEIGHT}
            isDiscrete={isDiscrete}
            totalDiscreteDuration={totalDiscreteDuration}
          />
          <TimelineChartBody
            width={(dimensions.width - TASK_LABEL_WIDTH) * chartScale}
            height={height - DURATION_LABEL_HEIGHT}
            rowHeight={rowHeight}
            numOfItems={numOfItems}
            totalDuration={totalDuration}
            isDiscrete={isDiscrete}
            totalDiscreteDuration={totalDiscreteDuration}
            unit={unit}
            scaleChart={scaleChartBody}
          />
        </div>
      </TimelineChartDimensionCtx.Provider>
    </div>
  );
};

export { TimelineChart };
