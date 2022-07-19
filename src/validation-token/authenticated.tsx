export default function Authenticated() {
    let token = localStorage.getItem('token')
    if (token) {
        return true;
    }else {
        return false;
    }
}