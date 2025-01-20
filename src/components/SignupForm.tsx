import "../assets/styles/SignupForm.css"

export function SignupForm() {
    return (
        <div className="card signup">
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="email-signup" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="example@gmail.com"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-password" className="form-label">Password</label>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="roleSelect"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Role
                    </label>
                    <select
                        className="block w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                        id="roleSelect"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select a role
                        </option>
                        <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="SCIENTIST">SCIENTIST</option>
                    </select>
                </div>

                <div className="flex justify-center w-full mt-4">
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        id="signup-btn"
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    )
}
