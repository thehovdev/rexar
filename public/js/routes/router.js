import React from 'react';
import { Router, Route, Switch } from 'react-router'

// import there all you application components
import TaskComponent from '../components/tasks';

// define there all you application routes
const router =
    <Route exact path="/" component={TaskComponent}/>
;

export default router;


