export default function ValidationUser(user: string) {
    
    let res = Validation(user);
    
    if (res) {
        console.log('O user é valido!')
    }else if (!res) {
        console.log('O user é invalido')
    }

    return res;
}

function Validation(user: string) {

    if(user.length > 0) {

    }

    if(user.length < 4) {
        return false;
    }else {
        return true;
    }
}