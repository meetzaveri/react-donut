import React, { Component } from 'react';
import styled from 'styled-components';
import DoughnutWrapper from '../../components/wrapper';
import Slice from '../../components/slice';
import Pie from '../../components/pie';

const distributedLayerDoughnut = () => (
    <div style={{position : 'relative'}}> 
        <Slice  slicedegree="0">
            <Pie piebg="black" degree="360" />
        </Slice>
        <Slice clipnative slicedegree="180">
            <Pie clipnative piebg="red" degree="360" />
        </Slice>
    </div>
)

export default distributedLayerDoughnut;
