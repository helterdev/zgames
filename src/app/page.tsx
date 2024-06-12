
import Navbar from "@/components/Navbar/Navbar";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function Home() {
  return (
    <main>
      <Navbar text="Login" url="/login" />
      <RegisterForm />
    </main>
  );
}
