import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();
  const content = "◀";
  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <button className="go-back-btn" onClick={handleGoBackClick}>
      {content}
    </button>
  );
}

export default GoBackButton;
