class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`name - ${this.name}, age - ${this.age}`)
    }
}

let abi = new User('Aybike', 17);

abi.print()

class Student extends User{
    username;
    #password;     
    constructor (name, age, username, password){
        super(name, age);
        this.username = username;
        this.#password = password;
    }
    print(password){
        if (password == this.#password){
            console.log(`name - ${this.name}, age - ${this.age}, username - ${this.username}`)
        }else{
            console.log('пароль неверный');
        }
    }
    
}

let user = new User('Aybike', 17);
let student = new Student('Aybike', 17, 'castitasa', '1234');

user.print()
student.print(1234)