const judyName = "Judy Hopps";
const nickName = "Nick Wilde";
const judyDaily = 3; 
const nickDaily = 2; 

let judyTotal = 0;
let nickTotal = 0;

console.log("=== LATIHAN PENJAGA ZOOTOPIA ===\n");
console.log("Jarak lari per hari:");
console.log(`${judyName}: ${judyDaily} km`);
console.log(`${nickName}: ${nickDaily} km\n`);

for (let day = 1; day <= 5; day++) {
    console.log(`Hari ${day}:`);
    console.log(`- ${judyName} lari ${judyDaily} km`);
    console.log(`- ${nickName} lari ${nickDaily} km\n`);
    judyTotal += judyDaily;
    nickTotal += nickDaily;
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(`${judyName}: ${judyTotal} km`);
console.log(`${nickName}: ${nickTotal} km`);