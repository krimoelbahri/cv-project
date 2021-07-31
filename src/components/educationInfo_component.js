import React from 'react'

class EducationInfo extends React.Component{
    render() {
        let info= this.props.info
        return (
            <div>
            {info.map((obj,i)=>{
            return(
            <div key={i} className="information">
                <div className="pd-1px">
                    <h3>Establishment: </h3> <p>{obj.establishment}</p>
                   
                </div>
                <div className="pd-1px">
                    <h3>Degree: </h3><p>{obj.degree}</p>
                </div>
                <div className="pd-1px date">
                    <div>
                        <h3>From: </h3><p>{obj.startDate}</p>
                    </div> 
                    <div>
                        <h3>To: </h3><p>{obj.endDate}</p>
                    </div>
                </div>
                <div className="pd-1px">
                    <p>{obj.description}</p>
                </div>
            </div>
            )})}
            </div>
        )
    }
}
export {EducationInfo}

