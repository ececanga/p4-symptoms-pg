import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<Home />, div);
  //ReactDOM.unmountComponentAtNode(div);


  expect(div.querySelector("h4").textContent).toBe("Home");
});
test('h4', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);


  expect(div.querySelector("h4").textContent).toBe("Home");
});


