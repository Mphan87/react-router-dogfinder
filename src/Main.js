const Main = ({ dogs }) => {

    return (
        <div>
            {dogs.map(i => (

                <ul>
                    <li> Name: {i.name} </li>
                    <li> Age: {i.age}</li>
                    <li> Facts: {i.facts} </li>
                    <li><img src={i.src} /></li>

                </ul>
            ))}
        </div>
    )
}
export default Main