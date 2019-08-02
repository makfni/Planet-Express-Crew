import React from 'react';
//React allows JSX which is a hybrid between JS and HTML 
const Card = ({ name, email, id }) => {
    //const { name, email, id } = props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='friends' src={`https://www.robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;