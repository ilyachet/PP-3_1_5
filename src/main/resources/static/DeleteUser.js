//Delete the user from the DB and delete the corresponding row of the "All Users" table after button DELETE pressed in Delete modal
document.getElementById('deleteForm').addEventListener('submit', async (event) => {
    event.preventDefault();


    const response = await fetch("/api/" + document.getElementById('deleteUserId').value, {
        method: "DELETE",
        headers: {"Accept": "application/json"}
    });
    if (response.ok === true) {

    }
    document.getElementById("usersTablePlacement").innerHTML = '';
    showAllUsers();
});