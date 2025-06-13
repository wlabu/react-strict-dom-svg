import { render, screen } from '@testing-library/react-native';

import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
    screen.getByText('Rendered!');
  });
});
