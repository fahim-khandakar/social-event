import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import userDefaultImg from "../../assets/user.png";

const Profile = () => {
  const { user, name } = useContext(AuthContext);
  return (
    <div>
      {user && (
        <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-5 items-center">
          <div className=" text-xs md:text-base text-center">
            {user.displayName ? user.displayName : name}
          </div>
          <div>
            {user.photoURL ? (
              <img
                className="w-[20px] md:w-[30px] rounded-full"
                src={user.photoURL}
                alt="User Photo"
              />
            ) : (
              <img
                className="w-[20px] md:w-[30px] rounded-full"
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
