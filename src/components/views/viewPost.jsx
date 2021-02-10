import React from 'react';
import ViewPostComponent from '../blogs/viewPost/viewPostComponent';
import {useParams} from 'react-router-dom';

function ViewPost() {
    const {slug} = useParams();

    return (
        <div>
            <ViewPostComponent slug={slug}/>
        </div>
    )
}

export default ViewPost
