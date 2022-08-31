import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
// import all the components you want to test
import Games from '../../components/Games/Games';
import GameDetail from '../../components/Details/Gamedetail';

describe('test screenshots for all components', () => {
//   const getState = () => ({ price: 0.145947, ticket: 'EUR/USD' });

  test('matches Games snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Games />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches GameDetails snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <GameDetail />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
