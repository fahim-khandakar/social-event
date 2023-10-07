import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import userDefaultImg from "../../assets/user.png";

const Profile = () => {
  const { user, name } = useContext(AuthContext);
  return (
    <div>
      {user && (
        <div className="flex gap-5 items-center">
          <div>{user.displayName ? user.displayName : name}</div>
          <div>
            {user.photoURL ? (
              <img
                className="w-[30px] rounded-full"
                src={user.photoURL}
                alt="User Photo"
              />
            ) : (
              <img
                className="w-[30px] rounded-full"
                src={userDefaultImg}
                alt="User Photo"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
