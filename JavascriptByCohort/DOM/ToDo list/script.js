let ctr = "0";
function callback(){
    const el = document.querySelectorAll("h4")[2];
    el.innerHTML = ctr;
    ctr++;
}
setInterval(callback,1000);



// Deleting Element->
