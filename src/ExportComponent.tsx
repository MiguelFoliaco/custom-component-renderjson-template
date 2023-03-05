import { ButtonMsg } from "./components/ButtonMsg";
type props = {
  name: string;
  props: any;
};
export default function GetComponent({ name, props }: props) {
  switch (name) {
    case "ButtonMsg":
      return <ButtonMsg />;
    default:
      <h1>No haz seleccionado un componente</h1>;
  }
}
