import React, { Component } from 'react';
import styled from 'styled-components';
import DoughnutWrapper from '../../components/wrapper';
import Slice from '../../components/slice';
import Pie from '../../components/pie';

const distributedLayerDoughnut = () => (
    <div style={{position : 'relative'}}> 
        <Slice  slicedegree="0" >
            <Pie piebg="#D1A917" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="72">
            <Pie clipnative piebg="#2C9DC2" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="144" >
            <Pie clipnative piebg="#D12A6A" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="216">
            <Pie clipnative piebg="#535353" degree="252" />
        </Slice>
        <Slice clipnative slicedegree="288">
            <Pie clipnative piebg="#AC6946" degree="252" />
        </Slice>
    </div>
)

export default distributedLayerDoughnut;
