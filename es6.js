var view=document.querySelector('#inp')
var off=document.querySelector(".off");
var on=document.querySelector(".on");
var Ac=document.querySelector('Ac')


off.addEventListener('click',(e)=>{
    view.style.backgroundColor='black';
    view.style. transition='all 4s ease-in-out';
    if(view.style.backgroundColor='black'){
        let trans=view.style. transition='all 4s ease-in-out'
        view.value=''
    }

})
on.addEventListener('click',(e)=>{
    view= document.querySelector('#inp')
    view.style.backgroundColor='rgb(92, 167, 170)';
    view.style. transition='all 4s ease-in-out';
    document.querySelector('#inp').value = '0'

})

function ac(){
    view.value="0"
}

function delect(){
    document.querySelector('#inp').value;
    let view= document.querySelector("#inp").value
    document.querySelector("#inp").value=view.substring(0,view.length-1)
}


 var calcule=function(number){
     if (document.querySelector("#inp").value === "0") {
         document.querySelector("#inp").value=number
    }else{
        document.querySelector('#inp').value += number
   }
}

function A(){
    document.querySelector('#inp').value=Math.abs(aqual())
}




 function aqual(){
    let view= document.querySelector('#inp').value;
    view = gl(view,'cos','Math.cos')
    view = gl(view,'sin','Math.sin')
    view = gl(view,'tan','Math.tan')
    view = gl(view,'ln','Math.log')
    view = gl(view,'sqrt','Math.sqrt')
    document.querySelector('#inp').value = eval(view);
    return view
}

function gl(str,elREpl,elParQ){
    let output='';
    while (str.includes(elREpl)) {
        let nchaine = str.slice(0,str.indexOf(elREpl[elREpl.length-1])+1)
        nchaine  = nchaine.replace(elREpl,elParQ)
        output+=nchaine
        console.log(output)
        str=str.slice(str.indexOf(elREpl[elREpl.length-1])+1,str.length)
        console.log(str)
    }
    output+=str;
    return output;
}