import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux-store/configureStore';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyle/>
      <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

