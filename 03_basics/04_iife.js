// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
}) ();

( ()=> {
    // IIFE
    console.log(`DB CONNECTED Two `);
}) ();

( (name)=> {
    //named IIFE
    console.log(`DB CONNECTED Two ${name}`);
}) ('Sitaram')

 