async function addArrayWithPromise(n, array) {
    if (!Array.isArray(array)) {
        throw Error('Error: el segundo argumento no es un array');
    } else {

        await new Promise((resolve) => {
            setTimeout(() => {
                array.push(n);
                resolve(array);
            }, 1000);
        });

        return array;
    }
}

function multiplyBy2(arr) {
    return arr.map((item) => item * 2);
}

const array = [1, 2, 3, 4, 5];


async function resolveArray() {
    try {
        const arrayAdded = await addArrayWithPromise(6, array);
        console.log(arrayAdded);
    } catch (error) {
        console.log(error);
    }
}

resolveArray();
