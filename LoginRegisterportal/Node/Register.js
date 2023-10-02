const rname= document.querySelector('#rname');
const rpassword=document.getElementById('rpassword');
const email=document.getElementById('email');
const rcpassword=document.getElementById('rcpassword');
const lname=document.querySelector('#lname');
const lpassword=document.getElementById('lpassword');

function maka(){
    const bt2 = document.getElementById('bt2');
    console.log(rname.value,rpassword.value);
    if (rcpassword.value==rpassword.value) {

        alert("Added")
        class Person{
            constructor(rname,rpassword,email)
            {
                this.rname=rname
                this.rpassword=rpassword
                this.email=email                
            }
        
        }
        module.exports= new Person(rname,rpassword,email)
    } else {
        alert("Password mismatch")
    }
}

function mak(){
    const bt1 = document.getElementById('bt1');
    console.log(lname.value,lpassword.value);
}

