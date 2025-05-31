const servUrl = 'http://localhost:5000/api/auth/';

const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = 'login.html';
    } else {
      fetch(`${servUrl}main`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then(res => {
        if (!res.ok) {
          localStorage.removeItem('token');
          window.location.href = 'login.html';
        }
        return res.json();
    })
    .then(data => {
        document.getElementById('welcome').innerText = data.message;
    });
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});

function redirectTo(page) {
    window.location.href = page;
}

function addToCart(){

}
