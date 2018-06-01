import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ens from './ens';

const assert = require('assert');

it('has a correct address', () => {
  assert.ok(ens.options.address);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
