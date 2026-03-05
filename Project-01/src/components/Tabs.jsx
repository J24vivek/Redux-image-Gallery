import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIF"];

  const dispatch = useDispatch()

  const activeTab =useSelector((state)=>state.search.activeTab)

  return (
    <div className="tabs">
      <div>
        {tabs.map(function (elem, idx) {
          return (
            <button onClick={()=>{
              dispatch(setActiveTab(elem))
            }}
              key={idx}
              className={`px-10 rounded uppercase text-sm active:scale-90 ${activeTab == elem ? 'bg-blue-400' : 'bg-gray-400'}`}
            >
              {elem}
            
            </button>
          );
        })}
      </div>
      <h1> Results for 'Cats' </h1>
    </div>
  );
};

export default Tabs;
