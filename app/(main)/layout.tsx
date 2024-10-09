import Navbar from "@/components/shared/navbar";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="container">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
