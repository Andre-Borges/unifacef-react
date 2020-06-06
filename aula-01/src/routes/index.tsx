import * as React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import { Divider } from 'semantic-ui-react';
import MainMenu from '../components/main-menu/index';
import NotFound from '../containers/not-found/index';
import { endpoints } from './endpoints';
import { observer } from 'mobx-react';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {
  render() {
    return (
      <>
        <MainMenu />
        <Divider hidden={true} />
        <Switch>
          {endpoints.map((route, key) => (
            <Route key={key} {...route} />
          ))}
          <Route
            path="*"
            exact={true}
            render={(props) => <NotFound {...props} />}
          />
        </Switch>
      </>
    );
  }
}
