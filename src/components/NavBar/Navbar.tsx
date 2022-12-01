const Navbar: () => JSX.Element = () => {
    return (<div className="navbar">
        <h2>MITHC</h2>
        <div className="list">
            <a href="/" >Home</a>
            <a href="/create">New post</a>
            <a href="/best">Best</a>
            {/* <a to="/" >Home</a>
            <a to="/create">New post</a>
            <a to="/best">Best</a> */}
        </div>
    </div>);
}

export default Navbar;