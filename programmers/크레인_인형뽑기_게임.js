const arr=[[1,2,3],[4,5,6]]

const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );
console.log(transpose(arr))