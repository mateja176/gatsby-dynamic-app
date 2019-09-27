import { Router as ReachRouter } from '@reach/router';
import React from 'react';
import Hello from '../modules/Hello';

const appPath = '/app';

const Router = () => (
  <ReachRouter>
    <Hello path={appPath} name="Gatsby Dynamic App" />
  </ReachRouter>
);

export default Router;
