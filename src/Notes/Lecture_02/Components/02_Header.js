// es7 react extension -> rfce, rfc -> get basic component template

// using variables inside jsx
const myName = 'Meet Mehta'

function Header () {
    return (
        <header>
            <h1>Header</h1>
            <p>Hi my name is {myName} and I am a software engineer</p>
            <p>{2 + 2}</p>
        </header>
    );
}

export default Header;