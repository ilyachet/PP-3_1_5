document.getElementById('createUserForm').addEventListener('submit', (event) => {
event.preventDefault();
//Gather new user info into object

const newUserRoles = [];
if (document.getElementById('newRoleUser').selected) newUserRoles.push({id: 2, authority: 'ROLE_USER'});
if (document.getElementById('newRoleAdmin').selected) newUserRoles.push({id: 1, authority: 'ROLE_ADMIN'});
const newUser = {
    name: document.getElementById('newUserFirstName').value,
    surname: document.getElementById('newUserLastName').value,
    age: document.getElementById('newUserAge').value,
    username: document.getElementById('newUserEmail').value,
    password: document.getElementById('newUserPassword').value,
    roles: newUserRoles
};

fetch("/api", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newUser)
}).then(() => {
    document.getElementById("usersTablePlacement").innerHTML = '';
    showAllUsers();
})


    document.getElementById('newUserFirstName').value = '';
    document.getElementById('newUserLastName').value = '';
    document.getElementById('newUserAge').value = '';
    document.getElementById('newUserEmail').value = '';
    document.getElementById('newUserPassword').value = '';
    document.getElementById('newRoleUser').selected = true;
    document.getElementById('newRoleAdmin').selected = false;

    document.getElementById("nav-usersTable-tab").click();

})