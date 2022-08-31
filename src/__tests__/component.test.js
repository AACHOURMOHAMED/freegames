import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import App from '../App';

test('renders markets on page', () => {
  const rendered = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const div = rendered.container.querySelector('div');
  expect(div.className).toBe('card');
});
