import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import React from 'react';
import SamuriJSApp from './App';
import ReactDOM from 'react-dom';


// test('renders learn react link', () => {
//   <BrowserRouter>
//     <Provider store={store}>
//       render(<App />);
//     </Provider>
//   </BrowserRouter>
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuriJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});



  // <React.StrictMode>
  //   {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> */}
  //   <App />
  // </React.StrictMode>
