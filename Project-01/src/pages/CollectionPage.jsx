import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBAr";
import CollectionCard from "../components/CollectionCard";
import { useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items || []);

  const dispatch = useDispatch()

  const clearAll = ()=>{
    dispatch(clearCollection())
  }

  return (
    <div className="collection-page">
      <SearchBar />

      <div className="collection-container">
        <div className="collection-header">
          <h2 className="collection-title">Your Photos Collection</h2>
          <h5 className="text-sm bg-gray-300 items-center justify-center">( For Home Page Click On LOGO & Then Search. )</h5>
          <button onClick={clearAll} className="clear-btn active:scale-90">Clear Collection</button>
        </div>

        <div className="collection-grid">
          {collection.map((item, idx) => (
            <div key={idx} className="collection-item">
              <CollectionCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
