let segundos = 00
export function conometro(){
    for(let i = segundos; i < 61; i++){
        if(i<60){
            display.innerHTML = i;
        }else{
            i = 0;
            display.innerHTML = i;
        }
    }
}
