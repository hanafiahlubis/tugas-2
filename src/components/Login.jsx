import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

export default function Login() {
  return (
    <>
      <KotakTeks nama="text" />
      <KotakTeks nama="password" />
      <Tombol>Login</Tombol>
    </>
  );
}
