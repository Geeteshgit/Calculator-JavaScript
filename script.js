window.addEventListener("DOMContentLoaded",initEvents);

function initEvents(){
    const buttons = document.querySelectorAll("button");
    const output = document.querySelector("#output");
    buttons.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            let val = e.currentTarget.innerText;
            if(val !== "=" &&  val !== "AC" && val !== "+/-"){
                if(output.innerText === "0" && val === "0"){
                    output.innerText = "0";
                }
                else if(output.innerText === "0" && val !== "0"){
                        output.innerText = "";
                        output.innerText += val;
                }
                else{
                    if(output.innerText.length>10){
                        e.preventDefault();
                    }
                    else{
                        if(output.innerText.charAt(output.innerText.length-1) === "+" ||
                       output.innerText.charAt(output.innerText.length-1) === "-" ||
                       output.innerText.charAt(output.innerText.length-1) === "/" ||
                       output.innerText.charAt(output.innerText.length-1) === "*" ||
                       output.innerText.charAt(output.innerText.length-1) === "."){
                        if(e.currentTarget.classList.contains("operator")){
                            e.preventDefault();
                        }
                        else{
                            output.innerText += val;
                        }
                    }
                    else{
                        output.innerText += val;
                    }
                    }
                }
            }
            else if(val === "AC"){
                if(output.innerText.length>1){
                    output.innerText = output.innerText.slice(0,output.innerText.length-1);
                }
                else{
                    output.innerText = "0";
                }
            }
            else{
                if(val === "+/-"){
                    let newnum = parseInt(output.innerText);
                    output.innerText = newnum - 2*newnum;
                }
                else if(val === "="){
                    let calc = eval(output.innerText);
                    let result = calc.toString();
                    if(result.length>9){
                        output.innerText = result.slice(0,10);
                    }else{
                        output.innerText = result;
                    }

                }
            }
        });
        btn.addEventListener("dblclick",(e)=>{
            if(e.currentTarget.innerText === "AC"){
                output.innerText = "0";
            }
        });
    });
}