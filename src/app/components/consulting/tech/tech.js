import React from 'react';

const TechnologyComponent = (props) => {
    return (
        <span className={'technology ' + props.data.id}>
            <img src={'/assets/img/tech/' + props.data.img} alt={props.data.name} title={props.data.name} />
            {props.data.name}
        </span>
    );
}

export default TechnologyComponent;
