import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const Loading = () => {
  const { places } = useContext(PlaceContext);

  if (places.length === 0) {
    return (
      <div className="trip_details">
        <table className="tripDetails_table">
          <tbody>
            <tr>
              <td>You don't have any places saved for this trip</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="trip_details">
        <table className="tripDetails_table">
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Loading;
