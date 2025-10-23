"use client";

import Nav from "@/features/navigation/components/Nav";
import { usePathname } from "next/navigation";

// export default function NavbarProvider({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathName = usePathname();
//   console.log(pathName);
//   return (
//     <>
//       {pathName === "/login" || pathName === "/register" ? null : <Nav />}
//       {children}
//     </>
//   );
// }

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const hideNavOn = ["/login", "/register"];
  return (
    <>
      {!hideNavOn.includes(path || "") && <Nav />}
      {children}
    </>
  );
}
