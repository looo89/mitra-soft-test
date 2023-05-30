
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <HashRouter>
        <Provider store={store}>
          <Layout/>
        </Provider>
      </HashRouter>
  );
}

export default App;
