import React from 'react';

const Experience =  props => (
    <div className="Experience">
        <div className="Experience-container">
            {props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>
                    <h3>{exp.jobTitle} {exp.company} 
                        <span>{exp.startDate}-{ exp.endDate }</span>
                    </h3>
                    {exp.jobDescription}
                </div>
            ))}
        </div>
    </div>
);

export default Experience;