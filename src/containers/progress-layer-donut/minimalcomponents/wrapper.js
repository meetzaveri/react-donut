import React from 'react';
import styled from 'styled-components';

const DoughnutWrapper = styled.div`
    top: ${props=>props.setpos ? props.setpos + 'px' : '40px'};
    left: ${props=>props.setpos ? props.setpos + 'px'  : '40px'};
    background:  ${props => props.mainbg === 'white' ? 'white' : props.mainbg };
    width: ${props=>props.donutwidth ? props.donutwidth + 'px' : '220px'};
    height: ${props=>props.donutwidth ? props.donutwidth + 'px' : '220px'};
    transition : all 1s;
    display: block;
    -webkit-clip: auto;
    clip: auto;
    position: relative;
    border-radius: 50%;
    z-index : 2147483647;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color : ${props => props.mainbg === 'black' ? 'white' : 'black' };
`

export default DoughnutWrapper;
