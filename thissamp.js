let laptop = {
    cpu: 'm1',
    ram: 8,
    brand: 'mac',

    getConfig: function(){

        console.log(this.cpu);
    } 
}
laptop.getConfig();