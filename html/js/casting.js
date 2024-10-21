console.log("-------------------- Number --------------------");
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));
console.log(Number("false"));
console.log(Number([]));
console.log(Number(null));
console.log(Number(undefined));

console.log("-------------------- Boolean --------------------");
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean(100));
console.log(Boolean("Hola"));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log("-------------------- Incognitas --------------------");
console.log(false==0);
console.log(" " == "");
console.log(true == 100);
console.log('100' == 100);
console.log(Number("hola") == Number(undefined));
console.log(null == undefined);

let nombre = "";
if (!nombre) {
    console.log("Nombre no tiene valor");
}