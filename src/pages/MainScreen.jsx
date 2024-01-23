import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import Center from "../components/Center";

export default function MainScreen() {
  return (
    <>
      <div className="flex  place-content-around p-5 gap-5">
        <AsideLeft />
        <Center />
        <AsideRight />
      </div>
    </>
  );
}
