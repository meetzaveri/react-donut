import React from 'react';
import styled from 'styled-components';

const Pie = styled.div`
    background-color: ${props => props.piebg === 'default_bg' ? '#DDDDDD' : props.piebg};
    -webkit-transform:  rotate(${props => props.degree}deg);
    transform: rotate(${props => props.degree}deg);
    position: absolute;
    transition : all 1s;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    border: ${props => props.mainbg === 'white' ? props.widthoffset + 'px solid white' : props.widthoffset + 'px solid ' + props.mainbg };
    border-radius: 50%;
    clip : ${props => props.clipnative ? 'rect(0px, 300px, 300px, 150px)' : 'auto'};
`

export default Pie;