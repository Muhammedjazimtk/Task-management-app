function Login() {
  return (
    <div className="h-screen bg-[#0f172a] flex justify-center items-center">
      <div className="bg-[#38bdf8] rounded-xl">
        <div className="p-10">
          <h2 className="mb-5 text-center text-4xl font-semibold">Login</h2>
          <form action="" className="font-semibold">
            <div className="mb-5">
              <label htmlFor="email">Email </label>
              <input type="email" id="email" className="w-full" />
            </div>
            <div className="mb-5">
              <label htmlFor="ln">Password </label>
              <input type="text" id="ln" className="w-full" />
            </div>
            <div className="flex justify-center mb-5">
              <div className="bg-[#0f172a] max-w-fit text-[#38bdf8] rounded-md">
                <button className="p-3">Login</button>
              </div>
            </div>
            <div className="text-sm text-center">
              <p>
                Do not have an account?
                <a href="/signUP" className="ml-2">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
