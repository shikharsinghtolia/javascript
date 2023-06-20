let btn =document.getElementById('toggle')
let img =document.getElementById('img')
btn.addEventListener('click',toggleimg)


function toggleimg(e){
    // console.log()
    if(btn.textContent.includes('On')){
        img.src="img/DSC_3277.JPG"
        btn.textContent="Turn Off"
    }else{
        img.src="img/DSC_2957.JPG"
        btn.textContent="Turn On"
    }
    
}