import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
// import all the components you want to test
import Games from '../../components/Games/Games';
import GameDetail from '../../components/Details/Gamedetail';
import Header from '../../components/Header/header';
import NotFound from '../../pages/NotFound';

describe('test screenshots for all components', () => {
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

  test('matches Header snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches NotFound snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <NotFound />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches redux store snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Games />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // define game object
  const game = {
    id: 1,
    title: 'test',
    gener: 'test',
    platphorm: 'test',
    released: 'test',
    image: 'test',
  };

  // test redux store
  test('matches redux store snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <GameDetail game={game} />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
