import { useState } from "react";

function Dashboard({ isloggedIn}) {
    return (
        <div>
            {isloggedIn ? <p>You are logged</p> : <p>Please log in</p>}
        </div>
    );
}

export default Dashboard