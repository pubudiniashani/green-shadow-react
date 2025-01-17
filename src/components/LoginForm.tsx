import "../assets/styles/LoginForm.css"

export function LoginForm() {
    return (
        <div className="card" id="login-card">
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password"/>
                </div>

                <button className="btn btn-primary btnlogin" id="login-btn">LOGIN</button>

            </div>
        </div>
    )
}
