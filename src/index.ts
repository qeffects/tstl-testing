export const libraryFunction = (param: number[], reverse: boolean) => {
    let reversed: number[] = [];

    if (reverse) {
        param.forEach((n) => table.insert(reversed, 1, n));
    } else {
        reversed = param;
    }
    
    return table.concat(reversed, ',');
}