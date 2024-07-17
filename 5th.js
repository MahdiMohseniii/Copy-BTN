const copyBtn = document.querySelector('button');
const textArea = document.querySelector('textarea');


copyBtn.addEventListener('click' , ()=>{
    textArea.select()
    let textValue = textArea.value;

    navigator.clipboard.writeText(textValue)
    copyBtn.innerText = 'کپی شد'
    copyBtn.style.backgroundColor= '#03a9f4'

    setTimeout(()=>{
        copyBtn.innerText ='کپی کن'
        copyBtn.style.backgroundColor= '#b3e5fc'
 
    },1500);
})