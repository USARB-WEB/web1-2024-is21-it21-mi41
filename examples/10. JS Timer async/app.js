function A(){
    setTimeout(() => {
        console.log('A');
    }, 5000);
}


async function B(){
    setTimeout(() => {
        console.log('B');
    }, 2000);
}


function C(){
    setTimeout(() => {
        console.log('C');
    }, 2000);
}

function D(){
    console.log('D');
}

function E(){
    console.log('E');
}


function run(){
    A();
    D();
    E();
    B();
    C();
}

run();

