// Action Creator
export const selectSong = (song) => {
   // Return an Action
   return {
      type: "SONG_SELECTED", // Must have "type"
      payload: song, // payload is optional
   };
};
