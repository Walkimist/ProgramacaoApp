var greeting = document.getElementById('greeting')
var username
function login() {
    username = prompt('Enter username') 
    if (username === '' || username === null) {
        alert('Faz direito cara')
    } else {
        greeting.innerHTML = 'Bem vindo, ' + username
        let logoutBtn = document.createElement('button')
        logoutBtn.innerText = 'Log out'
        logoutBtn.onclick = logout
        greeting.appendChild(logoutBtn)
    }
}

function logout() {
    alert('Falous')
    greeting.innerHTML = `Até mais ${username}`
}