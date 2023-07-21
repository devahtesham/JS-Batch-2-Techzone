// =========== DATE OBJECT IN JS ==========
// mm-dd--yyy

const today = new Date();
// const today = Date.now();        // timestamp
// const today = new Date("08-14-1947");
// const mydate = today.getDate()
// const mydate = today.getDay()
// const mydate = today.getFullYear()
// const mydate = today.getMonth()
// const mydate = today.getHours()
// const mydate = today.getMinutes()
// const mydate1 = today.getSeconds()
// const mydate2 = today.getMilliseconds()
// console.log(mydate,mydate1,mydate2);

// ======== Timestamp
// const date = today.getTime();
// console.log(date);

const pak_independence = new Date("08-14-1947");
const pak_independence_timeStamp = pak_independence.getTime();

const todayDate = new Date()
const todayDate_timeStamp = todayDate.getTime();
const timeStampDiff = todayDate_timeStamp - pak_independence_timeStamp;
// console.log(timeStampDiff);  // in milliseconds

const seconds = Math.floor(timeStampDiff/1000)
const miuntes = Math.floor(seconds/60)
const hours = Math.floor(miuntes/60)
const days = Math.floor(hours/24)
const months = Math.floor(days/30)
const years = Math.floor(months/12);

// console.log("years:- ",years);
// console.log("months:- ",months);
// console.log("days:- ",days);
// console.log("hours:- ",hours);
// console.log("miuntes:- ",miuntes);
// console.log("seconds:- ",seconds);

// console.log(today.toDateString());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleString());
// console.log(today.toLocaleTimeString());

// ========= DIGITAL CLOCK
const hrs = document.getElementById("hours")
const mins = document.getElementById("mins")
const secs = document.getElementById("secs")
const date = document.getElementById("date")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")

const displayDateTime = ()=>{
    const today = new Date();
    const h = today.getHours()
    const m = today.getMinutes()
    const s = today.getSeconds()
    const todayDate = today.toDateString()
    // console.log(h,m,s,todayDate);
    hrs.innerText = h;
    mins.innerText = m;
    secs.innerText = s;
    date.innerText = todayDate
}
// displayDateTime();
let timer;
startBtn.addEventListener("click",()=>{
    timer = setInterval(displayDateTime,1000)
})
stopBtn.addEventListener("click",()=>{
    clearInterval(timer)
})



