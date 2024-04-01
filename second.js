function array(start, end) {
    const result = [];
    
    // Determine the direction 
    const step = start <= end ? 1 : -1;

    // Iterate from start to end and push each number into the result array
    for (let i = start; i !== end + step; i += step) {
        result.push(i);
    }

    return result;
}
