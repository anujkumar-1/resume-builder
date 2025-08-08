document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle eye icon
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    try {
        e.preventDefault();
        // Add your login logic here
        const email= event.target.email.value;
        const password= event.target.password.value;

        let loginObj = {
           verifyEmail: email,
           verifyPassword: password
        }
        const response = await axios.get('http://localhost:3000/users/login', {params: {
            verifyEmail: email,
            verifyPassword: password
        }})
        localStorage.setItem("token", response.data.token)

        if(response.status===200){
            window.location.href= "./Resume.html"
        }
        else{
            throw new Error("Failed to login")
        
        }

        
    } catch (error) {
        console.log(error)
    }
    
});