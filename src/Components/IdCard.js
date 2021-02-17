import React, { isValidElement } from 'react';

const IdCard = (props) => {
    return (
        <div className="idCard-box">
            <div>
                <img src={props.picture} alt=""></img>
            </div>
            <div>
                <p>
                    Fist Name: {props.firstName}
                </p>
                <p>
                    Last name: {props.lastName}
                </p>
                <p>
                    Gender: {props.gender}
                </p>
                <p>
                    Height: {props.height}
                </p>
                <p>
                    Birth: {props.birth.toDateString()}
                </p>
            </div>
        </div>
    );
};

export default IdCard;