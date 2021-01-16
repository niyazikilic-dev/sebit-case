import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Routes from './Components/Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
