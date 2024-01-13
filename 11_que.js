// What is Closures in JavaScript ?


const parent = (name) => {
    let name = 'shreyash'

    const child = () => {
        console.log(name);

    }
    return child;

}
 const parentResult = parent()
 console.log(parentResult());

