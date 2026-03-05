import { useDispatch } from "react-redux";
import { toast, Zoom } from "react-toastify";
import { addCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
      const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    toast.success("Added To Collection...", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  };

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
            addToCollection(item);
          }}
          type="button"
          className="active:scale-80 transition-transform"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
