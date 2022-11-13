const renderDeleteModalContent = (user) => {
    let content = `
        <label class="d-block mx-auto pt-1 mt-2 mb-0 text-center fs-5 fw-bold">ID</label>
        <input id="deleteUserId" value="${user.id}" disabled type="text" class="form-control mx-auto" style="width: 250px;">
        <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">First name</label>
        <input value="${user.name}" disabled type="text" class="form-control mx-auto" style="width: 250px;">
        <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Last name</label>
        <input value="${user.surname}" disabled type="text" class="form-control mx-auto" style="width: 250px;">
        <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Age</label>
        <input value="${user.age}" disabled type="number" class="form-control mx-auto" style="width: 250px;">
        <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Email</label>
        <input value="${user.username}" disabled type="text" class="form-control mx-auto" style="width: 250px;">
        <label class="form-label d-block mx-auto pt-1 mt-3 mb-0 text-center fs-5 fw-bold">Role</label>
        <select size="2" disabled class="form-select mx-auto" style="width: 250px;">
    `;
    user.roles.forEach(role => {
        const authority = role.authority;
        content += `
        <option label="${authority.substring(authority.lastIndexOf('_') + 1)}"></option>
        `;
    });
    content += `
        </select>
    `;
    document.getElementById('deleteModalContent').innerHTML = content;
};

    //Show the Delete modal window
    document.getElementById('deleteModal').addEventListener('show.bs.modal', async (event) => {
        const userId = event.relatedTarget.getAttribute('data-bs-userId');
        // Fill the content of Delete modal with user data

        const response = await fetch("/api/" + userId, {
            method: "GET",
            headers: {"Accept": "application/json"}
        });
        if (response.ok === true) {
            // получаем данные
            const user = await response.json();
            renderDeleteModalContent(user);
        }

    });