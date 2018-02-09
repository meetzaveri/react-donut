import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DoughnutWrapper from '../../components/wrapper';
import Slice from '../../components/slice';
import Pie from '../../components/pie';
import DistributedLayerDoughnut from './distributedLayerDoughnut';

class Circle extends Component{
    constructor(props){
        super(props);
        this.state = {
            leaveEqual : this.props.shouldRemainEqual,
            pie : this.props.pievalues,
        }
    }
    
    render(){
        const { p1,p2,p3,p4,p5 } = this.state.pie;
        return(
            <div style={{'marginTop' : '10px'}}>
                { 
                  this.state.leaveEqual === false ? (<DistributedLayerDoughnut />) :(
                <div className ="wrapper" style={{position : 'relative'}}>
                    <Slice piebg="yellow">
                        <Slice  slicedegree={ 0 - p1 } >
                            <Pie piebg={ this.props.paintShades.c1 } degree={ 270 + p1 } />
                        </Slice> 
                        <Slice clipnative slicedegree={ 90 - p2 }  z_axis={p2}>
                            <Pie clipnative piebg={ this.props.paintShades.c2 } degree={ 270 + p2 } />
                        </Slice> 
                        <Slice clipnative slicedegree={ 180 - p3 }  z_axis={p3}>
                            <Pie clipnative piebg={ this.props.paintShades.c3 } degree={ 270 + p3} />
                        </Slice> 
                        <Slice clipnative slicedegree={ 270 - p4 }  z_axis={p4}>
                            <Pie clipnative piebg={ this.props.paintShades.c4 } degree={ 270 + p4} />
                        </Slice> 
                    </Slice>
                </div> 
                 )
                }
                
                <DoughnutWrapper />
            </div>
        );
    }
}

Circle.propTypes = {
    shouldRemainEqual : PropTypes.bool,
    pievalues : PropTypes.object,
    paintShades : PropTypes.object
}

export default Circle;
