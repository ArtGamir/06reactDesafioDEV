import NavBar from "../components/NavBar";
import MainScreen from "./MainScreen";
import Post from "./PostDetail";

export default function Home() {
  return (
    <div className="bg-gray-200 h-full">
      <NavBar />
      <MainScreen />
    </div>
  );
}
