import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Question from './Question';

function Attempt() {
    const {id} = useParams()
    return (
        <div>
            <h1>Attempt Page</h1>
        </div>
    )
}

export default Attempt;