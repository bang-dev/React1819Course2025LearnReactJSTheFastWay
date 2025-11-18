
function addTraditional(a, b){
    return a + b;
}


const addTraditionalNew = function(a,b){
    return a + b;
}

const add = (a,b) =>{
    console.log("Adding numbers");
    return a + b;
}

const test = () => console.log("Test function");

function main(){

    const book = { title:"Book Store"};

    book.title = "New Title";
    console.log(book);   
    
    let result = addTraditional(5, 10);
    console.log(result);

    result = addTraditionalNew(20, 30);
    console.log(result);

    result = add(100, 200);
    console.log(result);

    test();


    // ==========

    const ids = [1,2,3,4,5];

    ids.forEach((id) =>{
            id ++;
            console.log(id);
        }
    );
}


  main();