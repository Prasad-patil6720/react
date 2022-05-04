import './userCard.css'
const UserCard=()=>{
    const skills=['html','css','sass','js','react','redux','node','mongodb','PYTHON','flask','django','mysql','git','docker','heroku'];
    return (
        <div className='main'>
            <img src="react.png" alt="rea" />
            <h3>prasad patil</h3>

            <h1>skills</h1>
            <div className='content'>
                {
                    skills.map((skill)=>{
                        return <span className='but'>{skill}</span>
                    })
                }
            </div>
            <p>join on aug 30,2020</p>
        </div>
    )
}

export default UserCard;