const me = {
    name: 'Rahul',
    talk(){
        return `My name is ${this.name}`
    }
}
const ben = {
    name: 'Ben',
    talk(){
        return `My name is ${this.name}`
    }
}
console.log(me.talk());
console.log(ben.talk());
