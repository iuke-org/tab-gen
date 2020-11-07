import React from 'react';
import * as alphaTab from '@coderline/alphatab';

export default class AlphaTabLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: null
        }
    }

    componentDidMount() {
        const container = this.refs.alphaTab;
        console.log(this.props.settings);
        debugger;
        this.state.api = new alphaTab.AlphaTabApi(container, this.props.settings);  
    }        

    componentWillUnmount() {
        this.state.api.destroy();
    }

    render() {
        console.log(this.props.tracks)
        return (
            <div ref="alphaTab"
                data-file={this.props.file} 
                data-tex={this.props.tex} 
                data-tracks={JSON.stringify(this.props.tracks)}>
                {this.props.children}
            </div>
        );
    }
}

export {AlphaTabLight}
