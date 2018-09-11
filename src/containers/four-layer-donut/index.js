import React from "react";
import Doughnut from "./oneUnit";
import Errorboundary from "../../components/ErrorBoundary";
import PropTypes from 'prop-types';

const Main = props => {
  let widthoffset = 0;
  if (props.doughnutSize == "medium") {
    widthoffset = 37;
  } else if (props.doughnutSize == "small") {
    widthoffset = 75;
  }
  return (
    <Errorboundary>
      <Doughnut widthoffset={widthoffset} bgclr="white" {...props}/>
    </Errorboundary>
  );
};

Main.propTypes = {
  doughnutSize: PropTypes.string
}

export default Main;
