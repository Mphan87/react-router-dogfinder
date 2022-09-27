import React from "react";


const DogList = ({ dogs }) => {

    return (

        dogs.map(i => (

            <div>
                {i.name}
            </div>
        ))


    )
}

export default DogList