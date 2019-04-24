import { MainComponent } from "../components/MainComponent";
import { ItemComponent } from "../components/ItemComponent";

export const routes = [
  {
    path: "/",
    component: MainComponent
  },
  {
    path: "/film/:id?",
    component: ItemComponent
  }
];
