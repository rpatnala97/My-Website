// const user = {
//     get name(){
//         console.log('getting name');
//         return this._name +'-----';
//     },
//     set name(n){
//         console.log('setting name');
//         this._name = n.toUpperCase();

//     }
// }
// user.name = 'Alice';
// console.log(user.name);

const person = {
    firstName: 'Rahul',
    lastName: 'Patnala',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'Rinku Jane';
console.log(person);