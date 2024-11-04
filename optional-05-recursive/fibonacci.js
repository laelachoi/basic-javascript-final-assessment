function fibonacci(n) {
    if(n === 0) {
        return[0];
    }
    if(n === 1) {
        return[0,1];
    }
    const list = fibonacci(n - 1);
    list.push(list[list.length - 1] + list[list.length - 2]);
    return list;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
