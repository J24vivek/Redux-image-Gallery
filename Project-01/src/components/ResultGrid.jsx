import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(
    function () {
      if (!query.trim()) return;

      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "Photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab == "Videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          if (activeTab == "GIF") {
            return (
              <h1 className="gif text-lg text-center mt-200">
                GIF search is not available yet — try Photos or Videos.
              </h1>
            );
          }

          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error)
    return (
      <h1 className="text-red-500 text-lg text-center mt-10">
        {" "}
        Something went wrong...{" "}
      </h1>
    );
  if (loading)
    return (
      <h1 className="text-gray-500 text-lg text-center mt-10"> Loading... </h1>
    );
  if (activeTab === "GIF") {
    return (
      <div className="result-grid">
        <div className="w-full text-center text-gray-500 mt-10">
          <p className="text-lg">No GIFs available yet</p>
          <p className="text-sm">Try searching Photos or Videos.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="result-grid">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
