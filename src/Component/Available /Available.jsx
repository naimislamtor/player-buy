import React, { use } from 'react';

const Available = ({playerPromise}) => {
    const playerData = use(playerPromise);
    console.log(playerData);
    return (
        <div>
            hello bangladesh player 
        </div>
    );
};

export default Available;