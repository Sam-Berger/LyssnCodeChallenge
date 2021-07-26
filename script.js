fetch('data.json')
    .then(response => response.json())
    .then(data => addJsonToDocument(data));

function capitalizeFirstLetter(string) {
    let newString = string[0].toUpperCase() + string.substring(1)
    return newString
}

function capitalizeFirstAndLastName(object) {
    object.fname = capitalizeFirstLetter(object.fname)
    object.lname = capitalizeFirstLetter(object.lname)
}


function addJsonToDocument(array) {
    let parentDiv = document.getElementById("parentdiv")
    for (let i = 0; i < array.length; i++) {
        capitalizeFirstAndLastName(array[i])
        let div = document.createElement("div")
        div.className = "names"
        div.innerText = array[i].lname + ", " + array[i].fname
        parentdiv.append(div)
    }
}