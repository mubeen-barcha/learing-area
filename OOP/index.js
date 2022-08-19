// whenever i make an object of this hello class this constuctor method automatically calls
// class hello{
//     message(){
//         console.log("hello Everyone");
//     }

//     sorry(){
//         console.log("sorry everyone")
//     }
// }

// let a = new hello();

// a.message()
// a.sorry()

// node

// let a = new student("baba", 25);

// a.hello()
// student.staticMethod()



class emplyee{
    constructor(name,age, salary){
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        console.log("constructor : Employee");
    }

    info(){
        console.log(`<h3>Employee class</h3>Name : ${this.empname}
        Age : ${this.empage}
        salary: ${this.empsalary}`);
    }
}

class managar extends emplyee{
    info(){
        let ta = 3000;
        let pa = 300;
        let totalSalary = this.empsalary + ta + pa
        console.log(`<h3>Managar class</h3>Name : ${this.empname}
        Age : ${this.empage}
        salary: ${totalSalary}`);
    }
}

let a = new managar("baba", 25, 20000);
a.info()