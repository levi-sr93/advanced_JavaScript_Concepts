// const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);

//DEBUGGING

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     (accumlator, array) => {
//         console.log('Array', array);
//         console.log('Accumulator', accumlator);
//         return accumlator.concat(array)
//     }, []);


const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumlator, array) => {
        debugger
        return accumlator.concat(array)
    }, []);