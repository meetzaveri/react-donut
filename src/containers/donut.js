import React, { Component } from 'react';
import FiveLayerCircle from './five-layer-donut';
import FourLayerCircle from './four-layer-donut';
import ThreeLayerCircle from './three-layer-donut'
import TwoLayerCircle from './two-layer-donut';
import ProgressBar from './progress-layer-donut';

class Donut extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const {doughnutparts} = this.props;
        switch(doughnutparts){
            case 5 :
                return (<FiveLayerCircle toggleEquality={this.props.hasEqualParts} chartSize={this.props.doughnutsize} colorobject={this.props.doughnutcolors} valuesobject={this.props.doughnutvalues} />);
            case 4 :
                return (<FourLayerCircle toggleEquality={this.props.hasEqualParts} chartSize={this.props.doughnutsize} colorobject={this.props.doughnutcolors} valuesobject={this.props.doughnutvalues}/>);
            case 3 :
                return (<ThreeLayerCircle toggleEquality={this.props.hasEqualParts} chartSize={this.props.doughnutsize} colorobject={this.props.doughnutcolors} valuesobject={this.props.doughnutvalues}/>);
            case 2 :
                return ( <TwoLayerCircle toggleEquality={this.props.hasEqualParts} chartSize={this.props.doughnutsize} colorobject={this.props.doughnutcolors} valuesobject={this.props.doughnutvalues}/>);
            case 1 :
                return (<ProgressBar toggleEquality={this.props.hasEqualParts} chartSize={this.props.doughnutsize} defaultcolors={{c1:this.props.doughnutcolors,c2:'default_bg'}} progressratevalue={this.props.completionrate}/>)
            default :
                return (<ThreeLayerCircle toggleEquality={this.props.hasEqualParts} chartSize={this.props.doughnutsize} colorobject={{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A'}} valuesobject={{p1:35,p2:40,p3:25}}/>);
        }
    }
}

export default Donut;
