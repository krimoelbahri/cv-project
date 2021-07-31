import React from 'react'
class InputComponent extends React.Component{
    render(){
        return(
            <div className="form-div pd-1px">
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input 
                onChange={this.props.handleInputChange}
                id={this.props.id}
                type={this.props.type}
                 />
            </div>
        )
    }
}
export {InputComponent}