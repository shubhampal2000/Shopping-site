import React, { useMemo, useState } from "react";
import Card from "../../Sharedcomponents/Card";
import useGetAllProducts from "../../../hooks/useGetAllProducts";
import { FaSearch } from "react-icons/fa";
import logo from "../../../Assets/Icons/logo.png";
import { BiSolidCategory } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
const Home = () => {

 
  const [showoverlay, setShowoverlay] = useState(false);
  const [overlaydata, setOverlaydata] = useState();

  const [search, setSearch] = useState("");
  const [searchproduct, setSearchproduct] = useState(false);

  const data = useGetAllProducts();

  let category = [
    { category: "men's clothing", text: "MENS CLOTHING" },
    { category: "jewelery", text: "JEWELERY" },
    { category: "electronics", text: "ELECTRONICS" },
    { category: "women's clothing", text: "WOMENS CLOTHING" },
  ];

  const [filteredproducts, setFilteredproducts] = useState();
  const [showfilter, setShowfilter] = useState(false);

  const handleReadOverlay = async (id) => {
    const res = await fetch(`http://localhost:4000/product/${id}`);
    const result = await res.json();
    setOverlaydata(result);
    setShowoverlay(true);
  };

  const handleFilterClick = (cat) => {
    const filter = data.filter((val) => val.category === cat.category);
    setFilteredproducts(filter);
  };

  const filterByCategory = useMemo(() => {
    return filteredproducts && filteredproducts.length > 0
      ? filteredproducts.map((val) => {
          return (
            <React.Fragment key={Math.random()}>
              <Card val={val} />
            </React.Fragment>
          );
        })
      : null;
  }, [filteredproducts]);

  return (
    <>
      <div className="z-20 md:ml-[15vw] lg:ml-[15vw]  sticy top-25">
        <form className="w-full h-[10vh] lg:[12vh]  bg-slate-300 lg:flex-col gap-4 flex justify-center items-center">
          <label
            className="rounded-2xl w-1/2  justify-center items-center flex p-1 gap-4 border-2 border-solid bg-white text-black"
            htmlFor=""
          >
            <FaSearch />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchproduct(true);
                setShowfilter(false);
              }}
              className="max-w-[90%] w-full border-none outline-none"
              type="text"
              placeholder="Search Products"
            />
          </label>

          <select className="md:hidden lg:hidden">
            <option value="">Search by Category</option>
            {category.map((val) => (
              <option
                key={Math.random()}
                className="cursor-pointer"
                onClick={() => {
                  setSearchproduct(true);
                  setShowfilter(true);
                  handleFilterClick(val);
                }}
              >
                {val.text}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="md:ml-[15vw] lg:ml-[15vw] h-[80vh]   md:overflow-scroll w-auto bg-slate-300  overflow-scroll md:flex-col md:flex-nowrap flex relative flex-col  lg:flex-row lg:flex-wrap lg:justify-center  lg:items-center  md:items-center">
        {(searchproduct && search.length > 0) || showfilter ? (
          <div
            onClick={() => {
              setSearchproduct(false);
              setShowfilter(false);
              setFilteredproducts();
              setSearch("");
            }}
            className="self-start cursor-pointer w-full px-4 text-blue-900 hover:underline font-semibold my-3 "
          >
            Return to Home
          </div>
        ) : null}

        <div className="hidden md:flex lg:flex h-[90vh] w-[15vw] lg:flex-col lg:justify-between md:justify-between md:flex-col  top-[10vh] fixed left-0 bg-[#f5f6fa] shadow-lg items-start ">
          <div className=" flex flex-col mt-[1rem] justify-center gap-4 items-center ml-2">
            <div className="self-center">
              <img className="h-20 w-auto" src={logo} alt="" />
            </div>
            <img src="" alt="" className="h-auto w-auto" />
            <h2 className="text-[1.3rem] font-semibol ">Search By Category</h2>
            <ul className="flex text-[0.8rem] flex-col gap-1">
              {category.map((val) => (
                <li
                  key={Math.random()}
                  className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer flex items-center gap-2  hover:scale-105 rounded-lg pl-1 py-0.5  hover:bg-[#ffffff]"
                  onClick={() => {
                    setSearchproduct(true);
                    setShowfilter(true);
                    handleFilterClick(val);
                  }}
                >
                  <BiSolidCategory /> {val.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 self-center w-[70%] mb-4">
            <button className="cursor-pointer rounded-lg px-1 py-1 w-full  hover:bg-white flex items-center gap-1 font-semibold ">
              {" "}
              <IoMdDownload />
              Download App
            </button>
            <button className="cursor-pointer rounded-lg px-1 py-1 w-full  hover:bg-white flex items-center gap-1 font-semibold ">
              <FaHandsHelping /> Help & Answer
            </button>
          </div>
        </div>

        {searchproduct ? (
          <>
            {showfilter
              ? filterByCategory
              : data && data.length > 0
              ? filteredproducts && filteredproducts.length > 0
                ? filteredproducts
                    .filter((val) => {
                      return val.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((val) => {
                      return (
                        <React.Fragment key={Math.random()}>
                          <Card val={val} />
                        </React.Fragment>
                      );
                    })
                : data
                    .filter((val) => {
                      return val.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((val) => {
                      return (
                        <React.Fragment key={Math.random()}>
                          <Card val={val} />
                        </React.Fragment>
                      );
                    })
              : ""}
          </>
        ) : (
          <>
            {data && data.length > 0
              ? data.map((value) => {
                  return (
                    <React.Fragment key={value.id}>
                      <Card val={value} overfunc={handleReadOverlay} />
                    </React.Fragment>
                  );
                })
              : "Please wait still loading......"}{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
