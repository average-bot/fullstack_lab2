function getData(collection) {
    fetch(`http://localhost:3000/api/${collection}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log("The collection could not be retrieved.");
            } else {
                console.log(response);
            }
        });
}
exports.getData = getData;