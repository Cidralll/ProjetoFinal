import AddToken from "../../token/addToken";


// Parte do codigo destinada a verificar se o usuario e senha estão certos
export default async function LoginUser(email: String, password: String) {
    let isAth = true;
    let form = {
        "user": `${email}`,
        "password": `${password}`
    }
    
    let response = await loginRequestUser(form);
    // Se tiver erro ao fazer verificação de login na API retorna erro
    if (response === 422) {
        isAth = false
        
    }else { // Se estiver tudo certo efetua o login

        let token = JSON.stringify(response);
        AddToken(token)
        
    }
    // retorna se existe erro ou não
    return isAth;
}


// realiza o POST
async function loginRequestUser(form: any): Promise<Object> {

    let request = await fetch("http://127.0.0.1:8080/api/login/validation", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Content-Type': 'Application/Json'
        })
    })
    let token = await request.json()
    let statusCode = request.status

    
    if(statusCode === 202){
        return token;
    }
    return request.status;
}