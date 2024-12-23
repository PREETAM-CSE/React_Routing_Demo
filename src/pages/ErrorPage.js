import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        //setTimeout(()=>navigate("/"), 3000);
        // For navigating on to last page user was on
          setTimeout(()=>navigate(-1), 3000);
    }, [])
  return (
    <>
      <main>
        <h1>Something Went wrong</h1>
      </main>
    </>
  );
}

export default ErrorPage;
