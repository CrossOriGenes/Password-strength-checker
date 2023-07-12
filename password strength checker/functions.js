//functions to show/hide the password
const pswrd = document.getElementById('myPswrd');
const toggleBtn = document.getElementById('showBtn');

toggleBtn.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type','text')
        this.classList.add('show')
    }else{
        pswrd.setAttribute('type','password')
        this.classList.remove('show')
    }
}

//regular Expression validation check
const upperCase = document.getElementById('upper');
const lowerCase = document.getElementById('lower');
const digit = document.getElementById('number');
const specialChar = document.getElementById('special');
const minLength = document.getElementById('length');


pswrd.addEventListener('keyup', ()=> {

    let data = pswrd.value; //get the password value
    /* Regular Expressions */ 
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const minlength = new RegExp('(?=.{8,})');

    //lowercase validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid')
    }else{
        lowerCase.classList.remove('valid')
    }
    //upppercase validation check
    if(upper.test(data)){
        upperCase.classList.add('valid')
    }else{
        upperCase.classList.remove('valid')
    }
    //number validation check
    if(number.test(data)){
        digit.classList.add('valid')
    }else{
        digit.classList.remove('valid')
    }
    //special character validation check
    if(special.test(data)){
        specialChar.classList.add('valid')
    }else{
        specialChar.classList.remove('valid')
    }
    //length validation check
    if(minlength.test(data)){
        minLength.classList.add('valid')
    }else{
        minLength.classList.remove('valid')
    }

    
    //strength checking
    const container = document.querySelector('.container');

    function checkStrength(Value){
        var i=0
        if(Value.length > 6)
            i++
        if(Value.length >= 10)
            i++
        if(/[A-Z]/.test(Value))
            i++
        if(/[0-9]/.test(Value))
            i++
        if(/[A-Za-z0-8]/.test(Value))
            i++
        return i
    }
    /* set strong weak or medium according to size */
    let Value = pswrd.value;
    let strength = checkStrength(Value);

    if(strength <= 2){
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    }
    else if(strength >= 2 && strength <= 4){
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    }
    else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }

    //clears the strength field if password value is empty
    if(Value==""){
        container.classList.remove('weak');
    }
});