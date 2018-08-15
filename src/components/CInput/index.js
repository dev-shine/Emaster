import React, { Component } from 'react'
import './index.css'
import {
    Input,
    Label,
} from 'reactstrap'

class CInput extends Component {
    
    render () {
        const { label } = this.props
        return (
            <div className="cinput-container">
                <Input />
                <Label>Name</Label>                
            </div>
        )
    }
}

export default CInput