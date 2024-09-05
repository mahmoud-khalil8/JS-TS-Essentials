// there is a native nodejs crypto module in nodejs it supports various hashing algorithms
import crypto from 'crypto'

const hashPassword=(password,salt)=>{
    return crypto.pbkdf2(password,salt,600000, 64, 'sha256')
};

const compare =(input ,hashedPassword,salt)=>{
    const actualHashedPassword=hashPassword(input,salt)
    return actualHashedPassword.toStrin()===hashedPassword.toString()

}
(()=>{
    const password='password'
    const salt=crypto.randomBytes(16)
    const hashedPassword=hashPassword(password,salt)
    console.log(compare(password,hashPassword,salt))

})()