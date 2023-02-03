console.log("Hello, World!")

let input = 'tech';
let alien = {
    name: 'Rahul',
    tech: 'UI',
    'work exp': 3,
    laptop: {
        cpu: 'm1',
        ram: 8,
        brand: 'mac' 
    }
}
//delete alien['work exp'];
console.log(alien.tech);
console.log(alien['name']);
console.log(alien['work exp']);
console.log(alien[input]);
console.log(alien.laptop);
console.log(alien.laptop.brand);