//const infoBox = document.querySelector('#info');

function showInfo() {

    fetch("api/students/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            console.log(response.message);
            if (response.message) {
                //infoBox.innerHTML = response.message;
                console.log("the most epic fail ever");
            } else {
                response.array.forEach(element => {
                    alert("Unit id: " + element.unit_id + ", Full name: " + element.full_name);
                });
                //infoBox.innerHTML = '';
            }
        });
}
exports.showInfo = showInfo;