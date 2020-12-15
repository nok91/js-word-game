function clear() {
    process.stdout.write('\033c');
}

module.exports = {
    clear
}
