// PascalCaseWhereEachWordBeginsWithACapitalLetter
// camelCaseWhereEachWordBeginsWithACapitalLetter
// snake_case_where_each_word_is_separated_by_an_underscore


class Computer{
    #hasCode = '1234';//private
    _serialNumber = 0;//protected
    constructor(model, type){
        this.model = model;
        this.type = type;
        this._serialNumber = Math.floor(Math.random() * 1000);//protected
    }

    run(){
        console.log('Run the computer');
        this.runBios();
        this.runOs();
    }

    runBios(){
        console.log('Run the BIOS');
    }

    runOs(){
        console.log('Run the OS');
    }

    shutdown(){
        console.log('Shutdown the computer');
    }
}

// extends is used to inherit from another class
class Laptop extends Computer{
    constructor(model){
        super(model, 'Laptop');
        
    }

    openLid(){
        console.log('Open the lid');
    }

    closeLid(){
        console.log('Close the lid');
    }

    //abstractization
    run(){
        this.openLid();
        super.run();
    }

    //abstractization
    shutdown(){
        super.shutdown();
        this.closeLid();
    }
}

// extends is used to inherit from another class
class Desktop extends Computer{
    constructor(model){
        super(model, 'Desktop');
    }
}

const computer = new Computer();
computer.run();
computer.shutdown();

const computers = [
    new Laptop('HP'),
    new Desktop('Dell'), 
    new Laptop('Lenovo'),
];

// polimorphism
computers.forEach(computer => {
    console.log('-------------------');
    console.log(computer.type, computer.model);
    computer.run();
    computer.shutdown();
    console.log(computer._serialNumber);
    //console.log(computer.#hasCode);
});