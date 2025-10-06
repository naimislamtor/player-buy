import React, { use } from 'react';

const Available = ({playerPromise}) => {
    const playerData = use(playerPromise);
    console.log(playerData);
    return (
        <div>
            player selling by naim islam and sakib hasan 
        </div>
    );
};

export default Available;