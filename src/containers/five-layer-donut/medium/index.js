import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DoughnutWrapper from '../../../components/wrapper';
import Slice from '../../../components/slice';
import Pie from '../../../components/pie';
import './index.css'

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
            <div>
                { 
                  this.state.leaveEqual === true ? (
                    <div style={{position : 'relative'}}> 
                        <Slice  slicedegree="0" >
                            <Pie mainbg={this.props.bgclr} widthoffset="37" piebg={ this.props.paintShades.c1 } degree="252" />
                        </Slice>
                        <Slice clipnative slicedegree="72">
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c2 } degree="252" />
                        </Slice>
                        <Slice clipnative slicedegree="144" >
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c3 } degree="252" />
                        </Slice>
                        <Slice clipnative slicedegree="216">
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c4 } degree="252" />
                        </Slice>
                        <Slice clipnative slicedegree="288">
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c5 } degree="252" />
                        </Slice>
                    </div>
                  ) :(
                <div className ="wrapper" style={{position : 'relative'}}>
                    <Slice piebg="yellow">
                        <Slice  slicedegree={ 0 - p1 } >
                            <Pie mainbg={this.props.bgclr} widthoffset="37" piebg={ this.props.paintShades.c1 } degree={ 252 + p1}  />
                        </Slice> 
                        <Slice clipnative slicedegree={ 72 - p2 }  z_axis={p2} >
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c2 } degree={ 252 + p2 }  />
                        </Slice> 
                        <Slice clipnative slicedegree={ 144 - p3  }  z_axis={p3} >
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c3 } degree={ 252 + p3 }  />
                        </Slice> 
                        <Slice clipnative slicedegree={ 216 - p4 }  z_axis={p4} >
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c4 } degree={ 252 + p4 }  />
                        </Slice> 
                        <Slice clipnative slicedegree={ 288 - p5 }  z_axis={p5} >
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="37" piebg={ this.props.paintShades.c5 } degree={ 252 + p5}  />
                        </Slice> 
                    </Slice>
                </div> 
                 )
                }
                <DoughnutWrapper donutwidth="155" setpos="74"/>
                <DoughnutWrapper className="modified_medium_wrapper" donutwidth="175" setpos="74" />
            </div>
        );
    }
}

Circle.propTypes = {
    shouldRemainEqual : PropTypes.bool,
    pievalues : PropTypes.object,
    paintShades : PropTypes.object,
    bgclr : PropTypes.string
}

export default Circle;
