import React from 'react';
import { RouteComponentProps } from 'react-router';
import './style.scss';

interface IProps extends RouteComponentProps{}

class App extends React.Component<IProps> {
  handleRoute = () => {
    const { history, location } = this.props;
    const { pathname } = location;
    if (pathname === '/') {
      history.push('/index');
      return false;
    }
    return true;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {this.handleRoute() ? children : 'other'}
      </div>
    );
  }
}

export default App;
