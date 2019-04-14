import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from '../App';
import Dashboard from './Dashboard';
import Display from './Display';

describe('The App Component', () => {
  it('Should render', () => {
    render(<App />);
  });
});

describe('The Dashboard Component', () => {
  it('Should render', () => {
    render(<Dashboard />);
  });

  it('Should increase strike by 1 when clicked', () => {

  });
});

describe('The Display Component', () => {
  it('Should render', () => {
    render(<Display />);
  });
});
