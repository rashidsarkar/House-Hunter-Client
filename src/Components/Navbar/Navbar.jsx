import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-green-700 to-yellow-400">
      <div className="w-[95%] mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link to={"/"} className="flex items-center gap-4">
              <img
                src={`https://i.ibb.co/VjmMmWM/house-logo-template-design-vector-600nw-741515455.webp`}
                className="w-[70px]"
                alt=""
              />
              <h1 className="text-3xl font-bold text-white">House Hunter</h1>
            </Link>
          </div>

          <div className="flex gap-2">
            <Link
              className="px-4 py-3 font-bold text-pink-500 bg-white border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white"
              to={"/login"}
            >
              Login
            </Link>

            <Link
              className="px-4 py-3 font-bold text-pink-500 bg-white border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
