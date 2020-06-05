function sign() {
    let email_address = document.getElementById("EmailAdd");
    let first_name = document.getElementById("FistName");
    let last_name = document.getElementById("LastName");
    let password = document.getElementById("Passwordd");

    const url ='https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin';
    fetch(url, {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                "email_address":email_address.value,
                "first_name":first_name.value,
                "last_name":last_name.value,
                "password":password.value
            })
        }).then(response =>response.json())
        .then(data =>{

            if (data.status===201) {
                document.write("You have signed in successfully");

            } else if (data.status===405) {
                document.write("Incorrect Details");
            }

        })

}

