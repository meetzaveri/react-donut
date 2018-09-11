# react-donut 🍩

Simple and customizable doughnut chart component for react projects.

## Installation

[![NPM version](https://img.shields.io/badge/npm-1.2.1-brightgreen.svg)](https://www.npmjs.com/package/react-doughnut)

Using npm:

```
npm install react-donut
```

### Codesandbox demo [here](https://codesandbox.io/embed/10p5rkyooj)

## Screenshots

![alt text](https://i.imgur.com/KwOHGc9.png)

## API

### props

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">name</th>
    <th style="width: 50px;">type</th>
    <th style="width: 10px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>hasEqualParts</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Divides Donut in equal parts if value is "true". If "false" divided acc. to applied values</td>
    </tr>
    <tr>
      <td>doughnutsize</td>
      <td>String</td>
      <td>medium (additional - large & short)</td>
      <td>Specifies Size of Doughnut Chart</td>
    </tr>
    <tr>
      <td>doughnutparts</td>
      <td>Number</td>
      <td>5 (additional - 1,2,3,4)</td>
      <td>Parts as of Layer - specifies how many parts it will contain</td>
    </tr>
    <tr>
      <td>doughnutcolors</td>
      <td>Object</td>
      <td>{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A',c4:'#535353',c5:'#AC6946'}</td>
      <td>Pass Color Object in respect to parts you specified.for eg. 3 values({c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A'}) if you applied for 3 parts()</td>
    </tr>
    <tr>
		  <td>doughnutvalues</td>
		  <td>Object</td>
		  <td>{p1:5,p2:20,p3:25,p4:30,p5:20}</td>
		  <td>Pass values if you passed "false" to `hasEqualParts` props. This will randomize values of specific parts. </td>
		</tr>
  </tbody>
</table>

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import Donut from "react-donut";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Donut
        shouldRemainEqual={true}
        doughnutSize="large"
        doughnutparts={4}
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
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
