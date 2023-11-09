import "./App.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

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
      <div className="flex justify items-center font-bold text-[#38bdf8] text-2xl bg-[#1e293b] w-full h-[100px] pl-4 pr-4">
        <p className="w-1/3 text-xl"> Tast Manager App</p>
        <p className="w-1/3 text-center">{day}</p>
        <div className="w-1/3 text-end"><AccountCircleRoundedIcon fontSize="large"/></div>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
}

export default App;
