import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../SessionProvider";

function Home() {
  const { currentUser } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser == null) {
      navigate("/signin", { replace: true });
    }
  }, [currentUser, navigate]);

  return <div>This is Home</div>;
}

export default Home;
