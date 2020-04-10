import React, { Component } from 'react'
import V1component from 'V1components/V1component'
import V2component from 'v2/components/V2component'

export class exportedSrcComponent extends Component {
    render() {
        return (
            <div>
                exportedSrcComponent
                <br/>
                <br/>
                <V1component />
                <br/>
                <V2component />
            </div>
        )
    }
}

export default exportedSrcComponent
