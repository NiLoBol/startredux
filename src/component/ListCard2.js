import React from "react";
import MovieCard from "./MovieCard";

function ListCard2(props) {
  const data = props.data;
  return (
    <div className="row  h-25">
      {data.map((data, index) => (
        <MovieCard className={'text-light'} index={index} data={data} />
      ))}
    </div>
  );
}

export default ListCard2;
