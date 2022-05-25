const toggleBtn = document.querySelector(".fa-bars");
const links = document.querySelector(".nav-link");
const navCont = document.querySelector(".navbar");

toggleBtn.addEventListener("click", function() {
    // console.log(navCont);
        links.classList.toggle("show-link");
    
});




// let counts = setInterval(updated);

//         let upto = 1000;
        
//         function updated(){
//             var count = document.getElementById("counter");
//             count.innerText = upto++;

//             if(upto===2000)
//             {
//                 clearInterval(counts);
//             }
//         };