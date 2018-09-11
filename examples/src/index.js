import React from 'react';
import {render} from 'react-dom';
import MyComponent from '../../src';
const App = () => (<MyComponent
  shouldRemainEqual={false}
  doughnutSize="large"
  doughnutparts={5}
  paintShades={{
  c1: "#D1A917",
  c2: "#2C9DC2",
  c3: "#D12A6A",
  c4: "#535353",
  c5: "#AC6946"
}}
  pievalues={{
  p1: 5,
  p2: 20,
  p3: 25,
  p4: 30,
  p5: 20
}}
  completionrate={240}/>)
render(
  <App/>, document.getElementById("root"));