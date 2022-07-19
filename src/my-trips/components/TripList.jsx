import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import TripListItem from "./TripListItem";
import Modal from "react-modal";
import AddTripModal from "./AddTripModal";
import { BsPlusLg } from "react-icons/bs";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

const TripList = () => {
  const { userTrips } = useContext(UserContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="trip_listItems">
        <button id="addTripBtn" onClick={openModal}>
          <BsPlusLg />
        </button>
        {userTrips?.map((trip) => (
          <TripListItem
            key={trip.trip_id}
            tripId={trip.trip_id}
            tripName={trip.trip_name}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="modalContainer">
          <h2 id="modalHeader" ref={(_subtitle) => (subtitle = _subtitle)}>
            create trip
          </h2>
          <button id="modalCloseBtn" onClick={closeModal}>
            X
          </button>
          <AddTripModal />
        </div>
      </Modal>
    </>
  );
};

export default TripList;
