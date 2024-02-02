const board=document.querySelector("#board");
const winner=document.querySelector(".winner");
const btn=document.querySelector(".reset");
winner.innerText=""
let row=6;
let colmn=7;
let playerRed="R";
let playerYellow="Y"
let currPlayer=playerRed;
let present=[5,5,5,5,5,5,5]
let rowr=[];
let colr=[];
let rowy=[];
let coly=[];
let boards=[[],[],[],[],[],[]]
btn.addEventListener('click',()=>{
    board.innerHTML="";
    currPlayer=playerRed;
present=[5,5,5,5,5,5,5]
display();
console.clear();
boards=[[],[],[],[],[],[]]
winner.innerText=""
})


function display(){
    winner.innerText=""
    for(let r=0;r<row;r++){
        for(let c=0;c<colmn;c++){
            let div=document.createElement("div");
            let divs=document.createElement("div");
            divs.class='parents`${r}`';
            div.classList="card";
            divs.append(div);
            div.setAttribute("id",`${r}-${c}`);
            div.addEventListener('click',play);
            board.append(div)
        }
        let br=document.createElement("br");
        board.append(br)
    }
}
display();
function play(e){
    console.clear();
    let c=Number(e.target.id.split("-")[1]);
    let loc=present[c]
    if(loc>=0){
    let presentColoringElement=document.getElementById(`${loc}-${c}`)
    if(currPlayer==="Y"){
        currPlayer="R";
        presentColoringElement.style.backgroundColor="yellow";
        boards[`${loc}`][`${c}`]="y"
        winning();
    }
    else if(currPlayer==="R"){
        currPlayer="Y";
        presentColoringElement.style.backgroundColor="red";
        boards[`${loc}`][`${c}`]="r"
        winning();
    }
    loc--;
    present[c]=loc;  
}  
}

function winning(){
    if(winner.innerHTML==="Red wins" ||winner.innerHTML==="Yellow wins")return;
    //1. horizontal
    for(let i=0;i<row;i++){
        for(let j=0;j<4;j++){
            if(boards[i][j]===boards[i][j+1] && boards[i][j+1]===boards[i][j+2] &&boards[i][j+2]===boards[i][j+3] &&boards[i][j]==="y"){
                winner.innerHTML="Yellow wins"
                break;
            }
            else if(boards[i][j]===boards[i][j+1] && boards[i][j+1]===boards[i][j+2] &&boards[i][j+2]===boards[i][j+3] &&boards[i][j]==="r"){
                winner.innerHTML="Red wins"
                break;
            }
        
        }
        if(winner.innerHTML==="Red wins" ||winner.innerHTML==="Yellow wins")break;
    }
    //2. vertically
    for(let i=0;i<3;i++){
        for(let j=0;j<colmn;j++){

            if(boards[i][j]===boards[i+1][j] && boards[i+1][j]===boards[i+2][j] &&boards[i+2][j]===boards[i+3][j] && boards[i][j]==="r"){
                winner.innerHTML="Red wins"
                break;
            }

            else if(boards[i][j]===boards[i+1][j] && boards[i+1][j]===boards[i+2][j] &&boards[i+2][j]===
                boards[i+3][j] && boards[i][j]==="y"){
                    winner.innerHTML="Yellow wins"
            break;
            
            }
            
        }
        if(winner.innerHTML==="Red wins" ||winner.innerHTML==="Yellow wins")break;
    }
    //3. diagonally
    for(let i=3;i<row;i++){
        for(let j=0;j<colmn;j++){

            if(boards[i][j]===boards[i-1][j+1] && boards[i-1][j+1]===boards[i-2][j+2] &&boards[i-2][j+2]===boards[i-3][j+3] && boards[i][j]==="y"){
                winner.innerHTML="Yellow wins"
                break;
            }

            else if(boards[i][j]===boards[i-1][j+1] && boards[i-1][j+1]===boards[i-2][j+2] &&boards[i-2][j+2]===boards[i-3][j+3] && boards[i][j]==="r"){
                winner.innerHTML="Red wins"
                break;
            }
        }
            
    }
    
}
    
   





