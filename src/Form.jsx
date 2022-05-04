import './style.css'
const Form=()=>{
    const main={
        backgroundColor:"rgb(194,231,245)",
        height:"20rem"

    }
return<div style={main}>
    <h1 >subscribe</h1>
    <h3 >Sign up with your email address to recieve news and updates</h3>
    <div>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
    </div>
    <button>Subscribe</button>
</div>

}

export default Form