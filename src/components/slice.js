import React from 'react';
import styled from 'styled-components';

const Slice = styled.div`
    -webkit-transform:rotate(${props => props.slicedegree}deg);
    transform: rotate(${props => props.slicedegree}deg);
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    transition : all 1s;
    clip : ${props => props.clipnative ? 'rect(0px, 300px, 300px, 150px)' : 'auto'};
    z-index : ${props => props.z_axis}
`
export default Slice;