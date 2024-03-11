import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { addItemToCart } from "../../Redux/actions/addItemToCart";
import { useDispatch } from "react-redux";
import { initialState } from "../../Redux/reducers/cartReducer";

const Card = ({ val, overfunc }) => {
  const dispatch = useDispatch();

  return (
    <>
      <NavLink
        to={`/item/${val.id} `}
        className=" md:w-[90%] hover:scale-105 md:flex-row hover:shadow-md hover:shadow-black transition-all ease-in-out delay-0 duration-300  m-2 bg-white lg:w-[20%] "
      >
        <div className="  items-center lg:h-[30rem]  justify-center flex flex-col  md:flex-row md:flex lg:flex lg:justify-around  lg:flex-col">
          <img
            className="h-[15rem] w-1/2 md:p-4 md:w-[40%] lg:h-auto lg:w-auto lg:max-h-48 lg:max-w-48 object-contain"
            src={val.image}
            alt="my background"
          />
          <div className=" lg:w-full w-full md:w-[50%]flex flex-col justify-center items-start p-2 gap-1">
            <p className="text-xs font-semibold capitalize">{val.category}</p>
            <p className="font-semibold ">{val.title}</p>
            <p className="self-start">₹ {val.price}</p>
            <p className="flex items-center gap-1">
              {val.rating.rate} <CiStar className="text-black bg" />
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addItemToCart(val));
              }}
              className="lg:w-full w-full py-2 rounded-lg  md:w-[35%] md:min-w-[100px] text-white font-semibold bg-blue-800 hover:bg-blue-900"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
