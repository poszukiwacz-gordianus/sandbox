import Aside from "./Aside";
import Main from "./Main";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Section from "./Section";

export default function AppLayout() {
  return (
    <div className=" text-center text-2xl font-bold grid grid-cols-[0.2fr_1fr_2fr_1fr] grid-rows-[80px_1fr] h-screen bg-slate-500">
      <Navigation />
      <Menu />
      <Section />
      <Main />
      <Aside />
    </div>
  );
}
