// alert(
//     "Does this work?"
// )

const x_box = document.getElementById("x_box")
let little_x = ""
for (let i = 1; i <= 20; i ++){
    little_x = little_x.padStart(i,"x")
    //console.log(little_x)
    x_box.innerHTML += little_x +"<br>"
}

//length check built by condition
function check_length(uid){
    if (uid.length < 8 || uid.length > 12) {
        return false
    }else {
        return true
    }
}
//testing the length
function test_check_length() {
//Arrange
    const uid = "Danboy53"
    const expected = true
//Act
    const result = check_length(uid)
//Assert
    if (result !== expected){
        console.log (`check_length failed - expected: ${expected} -> actual: ${result}`)
    }
}
test_check_length()
//user id validated by loop that has conditions to check variables uppercase, lowercase, and number--> had to use continue
//to make loop move passed the number bc numbers were passing uppercase/lowercase condition. HOW???
function validate_User(uid){
    let Uppercase = false
    let Lowercase = false
    let number = false
    for (let i = 0; i<uid.length; i++){
        console.log(uid[i])
        if (Number.isInteger(parseInt(uid[i]))){
            if (number !== true){
                number = true
                console.log('number is now true')
            }
            continue
        }
        if (uid[i].toUpperCase() === uid[i]){
            if (Uppercase !== true){
                console.log('uppercase is now true')
                Uppercase = true
            }
        }
        if (uid[i].toLowerCase() === uid[i]){
            if (Lowercase !== true){
                Lowercase = true
                console.log('lowercase is now true')
            }
        }
    }
    if (!Uppercase || !Lowercase || !number){
        return false
    }else {
        return true }
}

function test_Validate_User(){
    //Arrange
    const username = "sally"
    const expected = true

    //Act
    const result = validate_User(username)

    //Assert
    if (result !== expected){
        console.log(`Validate_User failed - expected: ${expected} -> actual: ${result}`)
    }
}
test_Validate_User()

function dateDiff(bday){
    const today = new Date()
    const storeBday = new Date(bday)
    return Math.floor((today - storeBday)/86400000)
//Math.floor returns value without the decimals rounded down
}
console.log (dateDiff("1989-08-23"))

//86400000 milliseconds in a day

function test_dateDiff() {
//Arrange
    const bday = "1989-09-23"
    const expected = 11953
//Act
    const result = dateDiff(bday)
//Assert
    if (result !== expected) {
        console.log(`This aint work bro! We wanted ${expected}, but we got ${result}.`)
    }
}
test_dateDiff()

const error_box = document.getElementById("error_box")
const submit_form = document.getElementById("form_one")
submit_form.addEventListener("submit",
    function (event){
        event.preventDefault()
        const uid = document.getElementById("uid").value
        const bday= document.getElementById("bday").value
        const fname= document.getElementById("fname").value
        const lname= document.getElementById("lname").value
        if(!validate_User(uid) || !check_length(uid)) {
            error_box.innerHTML="Invalid User: User Id must be between 8 and 12 characters long and contain uppercase, lowercase, and number characters."
        }else{
            error_box.innerHTML = null
        }
        if(!fname || !lname || !bday){
            error_box.innerHTML +=" Invalid first name, last name, or birthday."
            return
        }
        if(dateDiff(bday) < 6570){
            error_box.innerHTML+=` ${fname} ${lname}, you have been breathing for ${dateDiff(bday)} days! You're probably not old enough to take this class.`
        }else{
            error_box.innerHTML += `Hey ${fname}! Congrats on being old enough to hangout with us! We're cool!`
        }


    })
//listener function has to be anonymous (no name for the function) to work
//error box needs a null when accepted or will continue to show invalid user notice
//had to += the second error notice because if not one would override the other