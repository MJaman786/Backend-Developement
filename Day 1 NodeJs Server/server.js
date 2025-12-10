const fs = require('fs');

// fs.writeFile('./logs.txt', '=== Initial Logs ===\n', (error)=>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log('file created successfull');
//     }
// })

const myData = new Date().toLocaleString('en-Us',{
    hour12: true,
    second: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
    weekday: 'short',
    month: 'short',
    year: 'numeric'
});

fs.appendFile('./logs.txt', `\n${myData}`, (error)=>{
    if (error) {
        console.log(error);
        
    }else{
        console.log('Log added successfull');
    }
})
