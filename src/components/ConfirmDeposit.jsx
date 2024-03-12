import { MyModal, MyButton } from "@components";
import { success } from "@assets";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";

export default function ConfirmDeposit({
  setOpenModal,
  openModal,
  setShowPicModal,
  data,
  current,
}) {
  const handleClose = () => setOpenModal(false);

  const closeModals = () => {
    handleClose();
    setShowPicModal(false);
  };
  return (
    <MyModal
      show={openModal}
      handleClose={handleClose}
      backdrop="static"
      className="rounded-4"
    >
      <div>
        <Image src={success} className="img-fluid" />
        <div className="text-center">
          <h1 style={{ color: "var(--mainBlue)", fontSize: "1.438rem" }}>
            Deposit Confirmed Successfully!!!
          </h1>
          {data.map((item, i) => (
            <div key={item.id}>
              {i === current && (
                <p
                  style={{
                    color: "var(--offBlack)",
                    fontSize: "1.063rem",
                    fontWeight: "600",
                  }}
                >
                  Initial Deposit for{" "}
                  <span className="text-danger">{item.title}</span> was
                  confirmed successfully. Kindly click the button below to
                  generate docket{" "}
                </p>
              )}
            </div>
          ))}

          <div className="mt-2">
            <MyButton
              variant="primary"
              text="Generate Docket"
              className="fw-bold mb-3"
            />
          </div>
          <p
            style={{
              color: "var(--lightBlue)",
              fontSize: "1.328rem",
              fontWeight: "600",
            }}
            className="cursor"
            onClick={closeModals}
          >
            Go Back
          </p>
        </div>
      </div>
    </MyModal>
  );
}

ConfirmDeposit.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.bool,
  setShowPicModal: PropTypes.bool,
  current: PropTypes.number,
  data: PropTypes.array,
};
