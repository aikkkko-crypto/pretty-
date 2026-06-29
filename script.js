// ستاره‌ها رو می‌سازیم
const starsContainer = document.getElementById("stars");

function createStars(){
    for(let i=0;i<120;i++){
        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random()*100 + "vw";
        star.style.top = Math.random()*100 + "vh";

        let size = Math.random()*3;
        star.style.width = size + "px";
        star.style.height = size + "px";

        starsContainer.appendChild(star);
    }
}

createStars();


// آرزو -> ستاره
function addWish(){
    const input = document.getElementById("wishInput");
    const result = document.getElementById("wishResult");

    if(input.value.trim() === ""){
        result.innerText = "اول آرزوت رو بنویس";
        return;
    }

    result.innerText = "آرزوت به آسمون رفت...";

    const star = document.createElement("div");
    star.className = "wish-star";

    star.style.left = Math.random()*100 + "vw";
    star.style.bottom = "0px";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },2000);

    input.value = "";
}


// کلیک روی ماه
function moonMessage(){
    alert("نفس... این آسمون فقط برای تو ساخته شده ✨");
}


// شهاب‌ها
setInterval(()=>{
    const s = document.createElement("div");
    s.className = "star";

    s.style.position = "fixed";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = Math.random()*50 + "vh";
    s.style.width = "2px";
    s.style.height = "2px";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },1000);

},4000);
