function executor(resolve, reject) {
    throw "Awesome Error"
    resolve('Maulik');

}
function kinjalp() {
    return new Promise(executor)

}

var myPromise = kinjalp();
console.log("I am my Promise", myPromise);
function callonresolve(response) {
    console.log("I am the response from promise", response);
}
myPromise.then(callonresolve).catch(function (error) { console.log("I am from error", error.message) });