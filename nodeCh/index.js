const fs = require('fs')

// fs.mkdirSync("been")

fs.writeFileSync("bio.txt", "hey this is node work")

fs.appendFileSync("bio.txt", "this is me")

const data = fs.readFileSync('bio.txt', "utf8");

console.log(data)

fs.renameSync("bio.txt", "mybio.txt")

fs.unlinkSync("mybio.txt")