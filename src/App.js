
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Layout/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
