export default function Authenticated() {
    let token = localStorage.getItem('token')
    if (token) {
        console.log('token existe')
        return true;
    }else {
        console.log('token não existe')
        return false;
    }
}