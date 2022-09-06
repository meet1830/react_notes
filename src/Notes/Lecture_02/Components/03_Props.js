// give a parameter in which the props values from the call will be stored
// by convention props
function Prop(props) {
    return (
        <div>
            <p><b>{props.name}</b></p>
            <p>{props.age}</p>
            <p>{props.place}</p>
        </div>
    );
}

// props will contain values in this form => props = {name: 'meet', age: '22', place: 'Vadodara'}

// can use destructuring to get the values as well
// props = {name, age, place}
/*
function Prop({name, age, place}) {
    return (
        <div>
            <p><b>{name}</b></p>
            <p>{age}</p>
            <p>{place}</p>
        </div>
    );
}
*/

export default Prop;