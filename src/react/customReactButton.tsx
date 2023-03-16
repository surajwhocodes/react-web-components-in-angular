import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export interface IMyReactButtonProps {
  counter: number;
  onClick?: () => void;
}

export const CustomReactButton: FunctionComponent<IMyReactButtonProps> = (props: IMyReactButtonProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(42);

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 3000);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  const {counter: propsCounter, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
        <div>Props counter: {propsCounter}
          <button type="button" onClick={handleClick}>click to increase</button>
        </div>
        <div>State counter: {stateCounter}</div>
    </div>
  );
};
