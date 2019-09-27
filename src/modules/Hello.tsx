import { RouteComponentProps } from '@reach/router';
import React from 'react';

export interface HelloProps extends RouteComponentProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <div>Hello {name}</div>;

export default Hello;
