import React from 'react';
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className="error">
            <h1> Ooops something went wrong! Please try again later!</h1>
            <Link className="error-link" to="/">
          Home
        </Link>
        </div>
    )
}
