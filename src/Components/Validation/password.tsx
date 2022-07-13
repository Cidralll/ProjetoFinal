export default function ValidationPassword(password: string) {
    
    let res = Validation(password);
    
    if (res) {
        console.log('A senha é valida!')
    }else if (!res) {
        console.log('A senha é invalida')
    }

    return res;
}

function Validation(password: string) {

    if(password.length < 4) {
        return false;
    }else {
        return true;
    }
}