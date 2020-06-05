function login(){
    let email_address=document.getElementById('emails');
    let password=document.getElementById('passcod');

    const url='https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin?';

    fetch(url,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            "email_address":email_address.value,
            "password":password.value
        })
    })
    .then(Response => Response.json())
    .then(data => console.log(data))

}  
