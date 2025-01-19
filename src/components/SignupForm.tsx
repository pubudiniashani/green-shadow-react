import "../assets/styles/SignupForm.css"

export function SignupForm() {
    return (
        <div className="card signup">
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="email-signup" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email-signup"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signup-password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="roleSelect" className="form-label">Role</label>
                    <select className="form-control" id="roleSelect">
                        <option value="" disabled selected>Select a role</option>
                        <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="SCIENTIST">SCIENTIST</option>

                    </select>
                </div>

                <button className="btn btn-primary signupbtn " id="signup-btn">Sign Up</button>
            </div>
        </div>
    )
}
