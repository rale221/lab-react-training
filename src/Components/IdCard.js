import React from 'react';

const IdCard = (props) => {
    return (
        <div className="idCard-box">
            <div>
                <img src={props.picture} alt=""></img>
            </div>
            <div>
                Fist Name: {props.firstName}
            </div>
            <div>
                Last name: {props.lastName}
            </div>
            <div>
                Gender: {props.gender}
            </div>
            <div>
                Height: {props.height}
            </div>
            <div>
                {/* Birthday: {moment(props.birth).format('LLLL')} */}
            </div>

        </div>
    );
};

export default IdCard;