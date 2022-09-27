import { useParams } from 'react-router-dom';
import React from 'react';

function DogDetails({ dogs }) {
    const { name } = useParams();

    if (name) {
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return (
            <ul>
                <li>{currentDog.name}</li>
                <li>{currentDog.age}</li>
                <li>Fun Facts</li>
                <ul>{currentDog.facts.map((fact) => (
                    <li> {fact} </li>
                )
                )}</ul>
                <li><img src={currentDog.src} /></li>

            </ul>
        )
    }
    return null;
}

export default DogDetails;