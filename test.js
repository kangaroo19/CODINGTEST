const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const [n]=input.shift().split(' ').map(Number)
const edges=input.map(v => v.trim().split('').map(Number))
const graph=new Map()

function getDirectons(matrix)