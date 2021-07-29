import React from 'react'
class InfoArea extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this)
        this.handleBlur= this.handleBlur.bind(this)
        this.handleChange= this.handleChange.bind(this)

        this.state={
            name: this.props.name,
            isEditing: false,
        }

    }
    handleClick(){
        this.setState({
            isEditing:true,
        })
    }
    handleChange(e){
        this.setState({
            name:e.target.value,
        })
    }
    handleBlur(e){
        if(!e.target.value){
            this.setState({
                name:this.props.name,
                isEditing:false,
            })
        }else{
            this.setState({
                name:e.target.value,
                isEditing:false,
            })
        }

    }
    render(){
        const isEditing= this.state.isEditing;
        let area;
        if(isEditing){
            area= <input 
            onBlur= {this.handleBlur} 
            onChange={this.handleChange} 
            type="text"
            placeholder={this.state.name}
            />   
        }else{
            area= <h1 onClick={this.handleClick}>{this.state.name}</h1>   
        }
        return(
            <div>{area}</div>
        )
    }
}

class GeneralInfo extends React.Component{

    render(){
        return(
         <div>
             <div>
             <InfoArea name="Title"/>
             <InfoArea name="Full Name"/>
             <InfoArea name="Address"/>
             </div>
             <div>
             <InfoArea name="Phone Number"/>
             <InfoArea name="Email"/>
             <InfoArea name="Website"/>
             </div>
         </div>
        )
    }

}
export {GeneralInfo}