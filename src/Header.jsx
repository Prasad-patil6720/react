const Header=()=>{
    const arr=['css_logo.png','js.webp','react.png'];
    const divStyle={
        height:"100%",
        width:"100%",
        display:"flex",
        gap:"50px",
        justifyContent:"space-around",
        backgroundColor:"gray"
    }
    const imgStyle={
        width:"150px",
        height:"150px"
    }
    return <div style={divStyle}>
    <h1>front end technologies</h1>
        {arr.map((a)=> <img src={a} key={a} alt={a} style={imgStyle}/>)}
        {/* <img src="css_logo.png" alt="log" /> */}
    </div>
}

export default Header;