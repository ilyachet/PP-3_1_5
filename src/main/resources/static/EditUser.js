
//Update the user in the DB and update the corresponding row of the "All Users" table after button EDIT pressed in Edit modal
document.getElementById('editForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const userRolesEdited = [];
    if (document.getElementById('optionUser').selected) userRolesEdited.push({id: 2, authority: 'ROLE_USER'});
    if (document.getElementById('optionAdmin').selected) userRolesEdited.push({id: 1, authority: 'ROLE_ADMIN'});
    const userEdited = {
        id: document.getElementById('idEdit').value,
        name: document.getElementById('firstNameEdit').value,
        surname: document.getElementById('lastNameEdit').value,
        age: document.getElementById('ageEdit').value,
        username: document.getElementById('usernameEdit').value,
        password: document.getElementById('passwordEdit').value,
        roles: userRolesEdited
    };
    fetch("http://localhost:8080/api", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userEdited)
    }).then(() => {
        document.getElementById("usersTablePlacement").innerHTML = '';
        showAllUsers();
    });
    document.getElementById('buttonCloseModal').click();
});