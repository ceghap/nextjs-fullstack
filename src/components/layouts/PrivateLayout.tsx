import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Spinner from "../Spinner";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    console.log(session);
    if (status === "unauthenticated") {
      router.replace("/signin");
    }
  }, [router, session, status]);

  return (
    <div>
      {status !== "authenticated" && <Spinner />}
      {status === "authenticated" && (
        <>
          <Header />
          <div>
            <Sidebar />
            <div className="format w-full p-4 md:ml-64">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default PrivateLayout;
