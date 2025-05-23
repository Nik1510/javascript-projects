let toastBox = document.getElementById('toastBox');
let sucessMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again!';


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML=msg;
    toastBox.appendChild(toast);
    
    if (msg === errorMsg){
        toast.classList.add('error');
    }
    if(msg===invalid){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}
