async function showUser () {

        const response = await fetch("/api/user", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            const user = await response.json();
            show(user);
        }

}

function show(user) {
    let content = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.age == null ? '' : user.age}</td>
        <td>${user.username}</td>
        <td>
    `;
    user.roles.forEach(role => {
        const authority = role.authority;
        content += `
            <span>${authority.substring(authority.lastIndexOf('_') + 1)}</span>
        `;
    });
    content += '</td>';
    document.getElementById('userInfoTableRow').innerHTML = content;
}

