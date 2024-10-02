import Aside from "./Aside";
import Main from "./Main";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Section from "./Section";

export default function AppLayout() {
  return (
      <Navigation />
      <Menu />
      <Section />
      <Main />
      <Aside />
    </div>
  );
}
