console.log('hi')

let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*
你好，我是Sealey
接下来演示一下我的前端功底
首先准备一个div
*/


#div1 {
    border: 1px solid red;
    width : 200px;
    height : 200px;
}

/*
接下来把div 变成八卦图

首先把div变成圆
*/

#div1 {
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}

/*
把左右变成 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
    加上两个圆
*/
#div1::before {
    width: 100px;
    height: 100px;
    position: absolute;
    top:0;
    left: 50%;
    transform: translate(-50%);
    background: #000;
    border-radius: 50%; 
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{

    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`
let string2 = ''

let n  = 0


let  setp= ()=>{

    setTimeout(()=>{



        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 +='&nbsp;'
        }else {
            string2 += string[n]
        }

        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)

        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n <string.length -1){
            n++
            setp()
        }

    },50)
}

setp()
