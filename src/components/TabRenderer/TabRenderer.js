import AlphaTabFull from './AlphaTab/alphatab-full'
import React from 'react';

class TabRenderer extends React.Component {

    render() {
        const setting = {
            file: "./static/files/canon.gp",
            tracks: [0]
        };
        return (
            <div>
                <AlphaTabFull settings={setting} />
            </div>
        )
    }
}

export { TabRenderer }
