import React, { Component } from 'react';
import styled from 'styled-components';
import DoughnutWrapper from '../../components/wrapper';
import Slice from '../../components/slice';
import Pie from '../../components/pie';

const distributedLayerDoughnut = () => (
    <div style={{position : 'relative'}}> 
        <Slice  slicedegree="0">
            <Pie piebg="yellow" degree="270" />
        </Slice>
        <Slice clipnative slicedegree="90">
            <Pie clipnative piebg="red" degree="270" />
        </Slice>
        <Slice clipnative slicedegree="180" >
            <Pie clipnative piebg="pink" degree="270" />
        </Slice>
        <Slice clipnative slicedegree="270">
            <Pie clipnative piebg="blue" degree="270" />
        </Slice>
    </div>
)

export default distributedLayerDoughnut;
