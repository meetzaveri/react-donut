import React from "react";
import FiveLayerCircle from "./five-layer-donut";
import FourLayerCircle from "./four-layer-donut";
import ThreeLayerCircle from "./three-layer-donut";
import TwoLayerCircle from "./two-layer-donut";
import PropTypes from 'prop-types';

const Donut = props => {

  switch (props.doughnutparts) {
    case 5:
      return (<FiveLayerCircle {...props}/>);
    case 4:
      return (<FourLayerCircle {...props}/>);
    case 3:
      return (<ThreeLayerCircle {...props}/>);
    case 2:
      return (<TwoLayerCircle {...props}/>);
  }
};

Donut.propTypes = {
  doughnutparts: PropTypes.number
}

Donut.defaultProps = {
  doughnutparts: 5
}

export default Donut;
