function Header(props) {
    return (     
    <div>
        <h1>{props.name}</h1>
        <h2>{props.color}</h2>
    </div>
    );
}

export default Header;