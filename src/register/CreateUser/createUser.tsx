export default async function CreateUser(email: String, password: String) {

    let form = {
        "user": `${email}`,
        "password": `${password}`
    }
    
    let response = await createRequestUser(form);
    let statusCode = (response);
    console.log(response)
}

async function createRequestUser(form: any): Promise<Object> {

    let request = await fetch("http://127.0.0.1:8080/api/login", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Content-Type': 'Application/Json'
        })
    })
    return `Connection status: ${request['status']}`;
}