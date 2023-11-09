import "./App.css";

function App() {
  let date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = date.toLocaleDateString("en-US", options);

  return (
    <div className="flex flex-col items-center gap-4 h-screen w-full bg-[#0f172a]">
      <div className="flex justify-center items-center font-bold text-[#38bdf8] text-2xl bg-[#1e293b] w-full h-[100px]">
        {day}
      </div>
<<<<<<< HEAD
      <div>
        test 2
      </div>
=======
      <div>test</div>
      <div>khshashbshkbx</div>
>>>>>>> bd28b184427dce4ccb9e77c26213dddcec8d6464
    </div>
  );
}

export default App;
