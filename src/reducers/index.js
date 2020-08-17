import { combineReducers } from "redux";

// Create reducer
const songsReducer = () => {
   return [
      {
         title: "Genda Phool",
         duration: "5:04",
      },
      {
         title: "Garmi",
         duration: "3:42",
      },
      {
         title: "Tere Naal",
         duration: "4:33",
      },
      {
         title: "Vaaste",
         duration: "5:23",
      },
      {
         title: "Aaj Se Teri",
         duration: "6:19",
      },
      {
         title: "Ban Ja Rani",
         duration: "4:12",
      },
   ];
};

const selectedSongReducer = (selectedSong = null, action) => {
   if (action.type === "SONG_SELECTED") {
      return action.payload;
   }
   return selectedSong;
};

export default combineReducers({
   songs: songsReducer, // key, value pair
   selectedSong: selectedSongReducer, // key, value pair
});
