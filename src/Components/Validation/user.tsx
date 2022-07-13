export default function ValidationUser(user: string) {
    
    let res = Validation(user);

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