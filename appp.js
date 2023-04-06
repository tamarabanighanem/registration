let arrData = []
if (sessionStorage.arrData != null) {
    arrData = JSON.parse(sessionStorage.arrData);
}
let validate;

let Username

function validateUsername() {
    // alert("Name must be filled with no spaces");

    const usernameInput = document.getElementById("username");
    Username = usernameInput.value;
    // console.log(Username)
    const regex = /^[^\s]+$/; // username condition, \s mean without spaces

    if (Username.includes(" ")) {
        alert("Name must be filled with no spaces");
        validate = false

        return false;
    }
    // console.log(arrData.includes(Username))
    else if (arrData.includes(Username)) {

        alert("Username already exists. welcome " + Username);
        validate = false
        return false;

    }
    checkValidate(Username);

    return true;
}



function validatePassword() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character");
        validate = false;
        return false;
    }
    validate = true;
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const userEmail = emailInput.value;
    if (!/\S+@\S+\.\S+/.test(userEmail)) // search for at least non-whitespace characters
    {
        alert("E-mail must be in a valid format such as example@gmail.com");
        validate = false;
        return false;
    }
    validate = true;
    return true;

}


function validatPhone() {
    const phoneInput = document.getElementById("phone")
    const Phone = phoneInput.value;
    if (!/^07[0-9]{8}$/.test(Phone)) {
        alert("Phone number must be 10 digits starting with 07");
        validate = false;
        return false;
    }
    validate = true
    return true;
}

function checkValidate(Username) {
    console.log(Username)
    if (validate) {
        arrData.push(Username);
        sessionStorage.setItem('arrData', JSON.stringify(arrData));
        console.log(arrData)
        // DataCollected.reset();
    }

}





































// let arrData = []
// if (localStorage.arrData != null) {
//     arrData = JSON.parse(localStorage.arrData)
// }

// function validate() {
//     let username = document.getElementById("uname").value;
//     let usernameRegex = /^[^\s]+$/;
//     let usernameresult = usernameRegex.test(username);
//     if (usernameresult == false) {
//         alert("plzZ Enter a validate Username");
//         return false;
//     }

//     let email = document.getElementById("email");
//     let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     let emailresult = emailregex.test(email);

//     if (emailresult == false) {
//         alert("plzZ Enter a validate Email");
//         return false;
//     }



//     /*Anything with less than eight characters OR anything with no numbers OR anything with no uppercase OR
//     or anything with no lowercase OR anything with no special characters.*/

//     let passowrd = document.getElementById("pass").value;
//     let passregex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
//     let passresult = passregex.test(passowrd);
//     if (passresult == false) {
//         alert("plzZ Enter a validate Passowrd")
//         return false;
//     }





//     //###-###-####
//     let phonenum = document.getElementById("phone");
//     let phoneregex = /^[1-9]\d{2}-\d{3}-\d{4}/;
//     let phoneresult = phoneregex.test(phonenum);
//     if (phoneresult == false) {
//         alert("plzZ Enter a validate Phone");
//         return false;
//     }

//     return true;

//     // alert("UserName" + usernameresult + ",Email" + emailresult + ",Password" + passresult + ",Phone" + phoneresult);
//     // return false;


// }


// function checkValidate(Username) {
//     console.log(Username)
//     if (usernameresult) {
//         arrData.push(Username);
//         localStorage.setItem('arrData', JSON.stringify(arrData));
//         console.log(arrData)
//     }

// }

