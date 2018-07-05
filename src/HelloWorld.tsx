import { css } from 'emotion';
import * as React from 'react';



export const HelloWorld: React.ComponentType<{}> = () => {
  return <div className={anotherClassName}> Hello World</div>;
};

const anotherClassName = css`
  color: tomato;
  font-size: 2em;
`;