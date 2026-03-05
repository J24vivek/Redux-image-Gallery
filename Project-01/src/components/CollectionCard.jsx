import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";
import { removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item) =>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
  return (
    <div className="cards">
      <a target="_blank" href={item.url} className="cardImg">
        {item.type == "photo" ? <img src={item.src} alt="" /> : ""}
        {item.type == "video" ? (
          <video autoPlay muted loop src={item.src}></video>
        ) : (
          ""
        )}
      </a>
      <div className="title">
        <h1>{item.title}</h1>
        <button
          onClick={() => {
            removeFromCollection(item)
          }}
          type="button"
          className="active:scale-80 transition-transform"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
