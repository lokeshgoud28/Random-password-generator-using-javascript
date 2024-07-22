function generatePassword(length , Lowercase , Uppercase , Numbers , Symbols ){

    const Lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const Uppercasechars="ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    const Numberchars="0123456789";
    const symbolchars="!@#$%^&*()_+-=";

    let allowedchars =""
    let password="";

    allowedchars+= Lowercase ?  Lowercasechars : "";
    allowedchars+= Uppercase ?  Uppercasechars : "";
    allowedchars+= Numbers ?  Numberchars : "";
    allowedchars+=Symbols?  symbolchars : "";

    if(length<=0){
        return `(password length much be atleast 1)`;
    }
    if(allowedchars.length ===0){
        return `(at least 1 set of character needs to be selected)`;
    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random() * allowedchars.length);
        password+=allowedchars[randomindex];
    }
    return password;
}
const passlength = 12;
const Lowercase =true;
const Uppercase =true;
const Numbers =true;
const Symbols =true;

const password = generatePassword(passlength ,
                                  Lowercase , 
                                   Uppercase ,  
                                   Numbers ,
                                    Symbols);
 console.log(`Generated password. ${password}`);