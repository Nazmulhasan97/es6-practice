

const Person = { name : 'Nazmul' , age : 23 , job : 'developer' , friend : 'shahadat'}

const {name , age , country} = Person ;
console.log(name , age , country);




const complexObject = {
    Info : {
        GrandFather : ' Gofur Howlader ' ,  
        FatherName : 'Abu Taher Howlader',
            MyName : 'Nazmul Hasan' 

    }
}
const {MyName} = complexObject.Info;
console.log(MyName)



const otherFriend = ['Robi' , 'Nion' , 'Nadim' , 'Shakib']
const [First , Second , ...Others] = otherFriend;
console.log(First , Second , Others);