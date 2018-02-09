import React from 'react';
import styled from 'styled-components';

const Pie = styled.div`
    background-color: ${props => props.piebg};
    -webkit-transform:  rotate(${props => props.degree}deg);
    transform: rotate(${props => props.degree}deg);
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    transition : all 1s;
    clip : ${props => props.clipnative ? 'rect(0px, 300px, 300px, 150px)' : 'auto'};
    border: ${props => props.mainbg === 'white' ? props.widthoffset + 'px solid white' : props.widthoffset + 'px solid ' + props.mainbg };
`

export default Pie;