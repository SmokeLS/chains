let data = `MmMmMxcRrCmMAaEeiIMmopzPHxEeHhXhQeEqOXyYxGDdgRrKkXWwUHKcCkuGgLBblkcCKIilnzBbBbYoOYVvyCTtcfqQzSsxXCcEnNyuSsUYuJjVvUnNeZmMTtuUwWSsxXIbBKkoORriFfFrRyqQGgTtnNnarRANZnyYNNPTzZtpaAxcCXWwLfFaAQRrCcRrUupPMGgjZzJdDmEKEesSkeUuxXRrBrcCHhRMmbjDdkKFfqoOQpPrRUuaAUsNnSuKkFfzZfPpHhEHheutTUDdBbMaAoOgGEekKyYmBiIbFEtTcnOoNCeJuUmFQqvhHVfTtMGgmcbBCuUQqgGMmMwWwQqpPWHWAJjaVaAWwvwhzOoZQqJjTKsSBbkfxVvCcmMpPBcCtSsTbsSPprRLlXrRunBbmMNpPNnGzLWwuOolLUlZQVvqIigUCcIiWwGCcgXxlLWwFpPJjsSeEIiQHhqtbWFfwRcCrdgGMmbBDVAabBvpFfBdDbDdSsoOUzZuPCHhaOvVoaAAOoaAeWwvVEcqCgGcJjDdUuQsAaaWwApPaAuUXKkxSQqUUMmuGgIfFHhpPPpkjJrRKErLlReZziugGuUBbWwBmVvtTMkKHvLlVUUhHdDayYAuuhbRriINWwnJGgwWj`;

let reactions = true;

String.prototype.replaceAt=function(index, secondIndex) {
    return this.substr(0, index) + this.substr(index + secondIndex);
}

while (data.length - 1 && reactions) {
    reactions = false;
    for (let i = 1; i < data.length - 1; i++) {
        if (compare(data[i-1], data[i])) {
            data = data.replaceAt(i-1, 2)
            reactions = true;
        }
        if (compare(data[i], data[i+1])) {
            data = data.replaceAt(i, 2)
            reactions = true;
        }
    }
}

console.log(data.length);

function compare(a, b) {
    if (a == b) {
        return false;
    }
    if (a.toLowerCase() == b.toLowerCase()) {
        return true;
    }
}
