const hexaColor=()=>{
let str='0123456789';
let color='';
for(let i=0;i<6;i++){
     let index=Math.floor(Math.random()*str.length);
     color +=str[index];
}

return '#'+color
}

const HexaColor=()=>{
    const hexa= hexaColor();
    const styl={
        backGroundColor:hexa
    }
    return <div style={styl}>{hexaColor()}</div>
}

export default HexaColor;