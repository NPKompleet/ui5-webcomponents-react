import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, useRef, useState } from 'react';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRow from './TimelineChartRow';
import TimelineDepsContainer from './TimelineDependency';

interface TimelineChartBodyProps {
  width: number;
  height?: number;
  rowHeight: number;
  numOfItems: number;
  totalDuration: number;
  isDiscrete;
  totalDiscreteDuration;
}

const TimelineChartBody: React.FC<TimelineChartBodyProps> = ({
  width,
  height,
  rowHeight,
  numOfItems,
  totalDuration,
  isDiscrete,
  totalDiscreteDuration
}) => {
  const style: CSSProperties = {
    width: width,
    height: `${numOfItems * rowHeight}px`,
    position: 'relative',
    outline: `1px solid ${ThemingParameters.sapList_BorderColor}`
  };

  return (
    <div style={{ height: height }}>
      <div style={style}>
        <TimelineChartLayer>
          <TimeLineChartGrid
            isDiscrete={isDiscrete}
            numOfRows={numOfItems}
            numOfCols={totalDiscreteDuration}
            rowHeight={rowHeight}
          />
        </TimelineChartLayer>
        <TimelineChartLayer>
          <TimelineDepsContainer rowHeight={rowHeight} totalDuration={totalDuration} />
        </TimelineChartLayer>
        <TimelineChartLayer>
          <TimelineChartRow rowHeight={rowHeight} rowNumber={2} totalDuration={totalDuration} />
        </TimelineChartLayer>
        <TimelineChartLayer></TimelineChartLayer>
        <TimelineChartTooltip />
      </div>
    </div>
  );
};

interface TimelineChartTaskHeaderProps {
  width: number;
  height: number;
  rowHeight: number;
  numOfItems: number;
}

const TimelineChartTaskHeader: React.FC<TimelineChartTaskHeaderProps> = ({ width, height, rowHeight, numOfItems }) => {
  const style: CSSProperties = {
    width: width,
    height: `${numOfItems * rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const itemStyle: CSSProperties = {
    width: '100%',
    height: `${rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    fontSize: '10px',
    lineHeight: `${rowHeight}px`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <div style={{ height: height }}>
      <div style={style}>
        {Array.from(Array(numOfItems).keys()).map((item) => {
          return (
            <div key={item} style={itemStyle}>
              <span style={{ paddingLeft: '10px', paddingRight: '10px' }} title={`Item ${item}`}>
                Item {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineChartDurationHeaderProps {
  width: number;
  height: number;
  isDiscrete: boolean;
  totalDiscreteDuration: number;
}

const TimelineChartDurationHeader: React.FC<TimelineChartDurationHeaderProps> = ({
  width,
  height,
  isDiscrete,
  totalDiscreteDuration
}) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const halfHeaderHeight = 0.5 * height;

  return (
    <div style={style}>
      <div
        style={{
          height: `${isDiscrete ? halfHeaderHeight : height}px`,
          textAlign: 'center',
          borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
          fontSize: '13px',
          lineHeight: `${isDiscrete ? halfHeaderHeight : height}px`
        }}
      >
        Duration (ms)
      </div>
      {isDiscrete ? (
        <div
          style={{
            height: `${halfHeaderHeight}px`,
            fontSize: '10px',
            display: 'grid',
            gridTemplateColumns: `repeat(${totalDiscreteDuration}, 1fr)`,
            textAlign: 'center',
            lineHeight: `${halfHeaderHeight}px`
          }}
        >
          {Array.from(Array(totalDiscreteDuration).keys()).map((num, index) => {
            return (
              <span
                key={index}
                style={{ outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}` }}
                title={`${num}`}
              >
                {num}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

interface TimelineChartHeaderLabelsProps {
  width: number;
  height: number;
}

const TimelineChartHeaderLabels: React.FC<TimelineChartHeaderLabelsProps> = ({ width, height }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return (
    <div style={style}>
      <div style={{ height: '50%' }}></div>
      <div style={{ height: '50%', textAlign: 'center', fontSize: '13px' }}>Tasks</div>
    </div>
  );
};

const TimelineChartTooltip: React.FC = () => {
  const [state, setState] = useState({ x: 0, y: 0, visible: false });
  const ref = useRef<HTMLDivElement>();

  const onClickHander = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { x, y } = ref.current?.getBoundingClientRect();
    setState({ x: evt.clientX - x, y: evt.clientY - y, visible: !state.visible });
  };

  return (
    <div
      ref={ref}
      style={{ width: '100%', height: '100%', fontSize: '10px', position: 'relative', zIndex: 5 }}
      onClick={(e) => onClickHander(e)}
    >
      {state.visible ? (
        <span
          style={{
            minWidth: 80,
            display: 'inline-grid',
            gap: 2,
            padding: 10,
            outline: `2px solid ${ThemingParameters.sapList_BorderColor}`,
            borderRadius: 8,
            color: ThemingParameters.sapTextColor,
            backgroundColor: ThemingParameters.sapBackgroundColor,
            position: 'absolute',
            left: state.x,
            top: state.y
          }}
        >
          <span style={{ textAlign: 'center' }}>
            <strong>Task</strong>
          </span>
          <span style={{ width: '100%', height: '4px', backgroundColor: 'blue' }}></span>
          <span>Start: 10ms</span>
          <span>Duration: 20ms</span>
          <span>End: 30ms</span>
        </span>
      ) : null}
    </div>
  );
};

export { TimelineChartBody, TimelineChartDurationHeader, TimelineChartHeaderLabels, TimelineChartTaskHeader };
