
class Student {
    constructor( sId , sName){
        this.id = sId;
        this.name = sName;
        this.school = 'U. I. Govt. Hight School'

    }

}

const student1 = new Student ( 12 , 'Nazmul');
const student2 = new Student ( 15 , 'Nadim' );
// console.log( student1 , student2);
console.log(student1.name , student2.name);