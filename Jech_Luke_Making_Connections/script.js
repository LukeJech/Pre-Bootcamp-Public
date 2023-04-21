

function edit_profile(id) {
    let name = document.getElementById(id)
    name.innerHTML = `<p contenteditable="true">Type Your Name</p>`
}

function request(connection_div, request_id, total_connections_id) {
    document.getElementById(connection_div).remove()
    
    let request_num = document.getElementById(request_id)
    request_num.innerText = Number(request_num.innerText) - 1

    let total_connections = document.getElementById(total_connections_id)

    if (total_connections != null) {
        total_connections.innerText = Number(total_connections.innerText) + 1
    }
}
