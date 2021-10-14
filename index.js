//Dependencies
const Base_64 = require("base-64")

//Variables
//Code format Faker|First half of the code encoded in base64|Second half of the code encoded in base64|Faker
const code = `Faker|Y29uc29sZS5sb2|coIlRlc3QiKQ==|Faker`

//Main
eval(Base_64.decode(`${code.split("|")[1]}${code.split("|")[2]}`))
