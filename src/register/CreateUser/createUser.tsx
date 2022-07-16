// Parte do codigo destinada a fazer o envio do usuario e senha 
export default async function CreateUser(email: String, password: String) {

    let form = {
        "user": `${email}`,
        "password": `${password}`
    }
    
    let response = await createRequestUser(form);
    let statusCode = (response);
    if(statusCode === 400){
        console.log('Error')
    }else if(statusCode === 500) {
        console.log('Error')
    }else if(statusCode === 201){
        window.location.href = "http://localhost:3000/";
        return alert('Created task')
    }
}


// realiza o POST
async function createRequestUser(form: any): Promise<Object> {

    let request = await fetch("http://127.0.0.1:8080/api/login", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Content-Type': 'Application/Json'
        })
    })
    return request['status'];
}