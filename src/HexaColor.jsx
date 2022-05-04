const HexaColor=()=>{
    const colors=['#518cef','#3b10c4','#9aede6','#8ee763','#a30dd0','aqua','red','green','maroon','lightgreen','whitesmoke','black'];

    return <div>{
        colors.map((colo)=>{return  <div style={{backgroundColor:colo,height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>{colo}</div>})
    }
    </div>
}

export default HexaColor;