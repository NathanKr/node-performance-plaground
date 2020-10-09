console.log('app is loading ......');

let storage = [];

setInterval(()=>{
    const msg = new Date();
    console.log(msg);
    storage.push(msg);
},1000)

