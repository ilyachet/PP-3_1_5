
//Show the Edit modal window
document.getElementById('editModal').addEventListener('show.bs.modal', async (event) => {
    const editUserId = event.relatedTarget.getAttribute('data-bs-userId');

    // Fill the form of Edit modal with user data
    const response = await fetch("/api/" + editUserId, {
        method: "GET",
        headers: {"Accept": "application/json"}
    });
    if (response.ok === true) {
        // получаем данные
        const user = await response.json();
        renderEditModalFormContent(user);
    }
});


const renderEditModalFormContent = (user) => {
    document.getElementById('editForm').innerHTML = `
    <label class="d-block mx-auto pt-1 mt-2 mb-0 text-center fs-5 fw-bold">ID
        <input id="idEdit" value="${user.id}" type="text" disabled class="form-control mx-auto" style="width: 250px;"></label>
    <label class="form-label d-block mx-auto pt-1 mt-2 mb-0 text-center fs-5 fw-bold">First name
        <input id="firstNameEdit" value="${user.name}" type="text" class="form-control mx-auto" style="width: 250px;"></label>
    <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Last name
        <input id="lastNameEdit" value="${user.surname}" type="text" class="form-control mx-auto" style="width: 250px;"></label>
    <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Age
        <input id="ageEdit" min="0" max="200" value="${user.age}" type="number" class="form-control mx-auto" style="width: 250px;"></label>
    <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Email
        <input id="usernameEdit" value="${user.username}" required type="email" class="form-control mx-auto" style="width: 250px;"></label>
    <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Password
        <input id="passwordEdit" value="" type="text" class="form-control mx-auto" style="width: 250px;" placeholder="Type new password"></label>
    <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Role
        <select size="2" multiple required class="form-select mx-auto" style="width: 250px;">
            <option id="optionAdmin">ADMIN</option>
            <option id="optionUser">USER</option>
        </select></label>
    `;
    user.roles.forEach(role => {
        if (role.id === 2) document.getElementById('optionUser').selected = true;
        if (role.id === 1) document.getElementById('optionAdmin').selected = true;
    });
};