import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
   //    console.log(props.song);
   if (!song) {
      return (
         <div>
            <h3>Select a song</h3>
         </div>
      );
   } else {
      return (
         <div>
            <h3>Details for</h3>
            <p>
               Title: {song.title}
               <br />
               Duration: {song.duration}
            </p>
         </div>
      );
   }
};

const mapStateToProps = (state) => {
   return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
