function SignUp() {
  return (
    <div className="h-screen bg-[#0f172a] flex justify-center items-center">
      <div className="bg-[#38bdf8] rounded-xl">
        <div className="p-10">
          <h2 className="mb-5 text-center text-4xl font-semibold">Sign Up</h2>
          <form action="" className="font-semibold">
            <div className="mb-5">
              <label htmlFor="fn">Name </label>
              <input type="text" id="fn" className="w-full rounded-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="">DOB </label>
              <input type="date" className="w-full rounded-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="email">Email </label>
              <input type="email" id="email" className="w-full rounded-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="ln">Password </label>
              <input type="text" id="ln" className="w-full rounded-md" />
            </div>
            <div className="flex justify-center mb-5">
              <div className="bg-[#0f172a] max-w-fit text-[#38bdf8] rounded-md">
                <button className="p-3">Submit</button>
              </div>
            </div>
            <div className="text-sm text-center">
              <p>
                Already have an account?
                <a href="/login" className="underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
