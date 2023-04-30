let cl = console.log;

const second = () => {
    setTimeout(() => {
        cl(`calling second function`)
    }, 3000);
}
        
const first = () => {
    cl(`calling first function before second`);
    // alert("hello");
    second();
    cl(`calling first function after second`);
}

first();

// bydefault >> single threded, sync, bloking nature
// single threded >> it exicute only one task at a time

// setTimeOut, fetch, XMLHttpRequest, geolocation
// async

