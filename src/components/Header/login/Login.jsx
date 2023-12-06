import UserIcon from "../../../styles/icons/user.png";

function LoginNav() {
  return (
    <div className="header-login">
      <button>
        <img src={UserIcon} alt="user icon" />
      </button>
    </div>
  );
}

export default LoginNav;
