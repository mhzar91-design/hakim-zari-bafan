// ===============================
// حکیم اکبر زری‌بافان
// بخش ۱ فایل script.js
// ===============================

// پیام خوش‌آمدگویی
window.addEventListener("load", function () {

    console.log("وب سایت با موفقیت اجرا شد.");

});

// ===============================
// اسکرول نرم
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// نمایش منو هنگام اسکرول
// ===============================

window.addEventListener("scroll", function () {

    let header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 3px 12px rgba(0,0,0,.08)";

    }

});

// ===============================
// انیمیشن کارت‌ها
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ===================================
// بخش ۲ فایل script.js
// ===================================

// ظاهر شدن بخش‌ها هنگام اسکرول

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".8s";

observer.observe(section);

});

// ===================================
// دکمه بازگشت به بالا
// ===================================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="20px";
topButton.style.bottom="20px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#1d7a37";
topButton.style.color="#fff";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===================================
// سال خودکار فوتر
// ===================================

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML="تمامی حقوق محفوظ است © "+new Date().getFullYear()+" | حکیم اکبر زری‌بافان";

}

// ===================================
// بخش ۳ فایل script.js (پایان)
// ===================================

// نمایش پیام خوش‌آمدگویی
setTimeout(() => {

    console.log("به وب‌سایت حکیم اکبر زری‌بافان خوش آمدید.");

}, 1000);


// افکت کوچک روی دکمه‌ها

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});


// افکت کارت‌ها

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],{

duration:300

});

});

});


// پیام پایان بارگذاری

window.onload=function(){

console.log("تمام بخش‌های سایت با موفقیت بارگذاری شدند.");

};


// پایان فایل