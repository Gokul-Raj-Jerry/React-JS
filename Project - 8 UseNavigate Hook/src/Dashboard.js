import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/firstPage");
  };

  return (
    <>
      <div className="text-center">
        <div>useNavigate Hook</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </>
  );
};

export default Dashboard;