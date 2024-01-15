import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import MainCenter from "../components/MainCenter";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-200 h-full">
      <NavBar />
      <div className="flex place-content-around">
        <AsideLeft />
        <MainCenter />
        <AsideRight />
      </div>
    </div>
  );
}
