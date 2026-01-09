const apiurl = 'http://localhost:8080/api/std/all';

function fetchStdData(){
    fetch(apiurl)
         .then(response => response.json())
         .then(data =>{
            const usersTableBody = document.querySelector('#usersTable tbody');

            usersTableBody.innerHTML= '';

            data.forEach(users=>{
                const row = document.createElement('tr');

                row.innerHTML = `
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.email}</td>
                <td>${users.age}</td>
                `;

                usersTableBody.appendChild(row);
            })
         })
}

window.onload = fetchStdData;