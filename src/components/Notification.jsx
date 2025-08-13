import {useState} from 'react';

function Notification({hasNewsMessage}) {
    return (
        <div>
            <h2>Inbox</h2>
            {hasNewsMessage && <p><b>There is a new message!</b></p>}
        </div>
    )
}

export default Notification