import { MyModal, MyButton, Headings } from "@components";
import { success } from "@assets";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./student.module.css";
import { vector4 } from "@assets";

export default function ConfirmDeposit({
  setOpenModal,
  openModal,
  data,
  current,
}) {
  const navigate = useNavigate();
  const handleClose = () => setOpenModal(false);

  const closeModal = () => {
    handleClose();
  };

  const pStyle = {
    fontWeight: "600",
    color: "var(--offBlack)",
    fontSize: "1.063rem",
  };

  return (
    <MyModal
      show={openModal}
      handleClose={handleClose}
      backdrop="static"
      className="rounded-4 position-relative"
    >
      <div className="text-center">
        <Image src={vector4} className={`img-fluid ${styles.bg}`} />
        <Image
          src={success}
          className="img-fluid position-relative"
          style={{ width: "400px", height: "400px", zIndex: 3 }}
        />
        <div>
          <Headings
            title="Deposit Confirmed Successfully!!!"
            color="var(--mainBlue)"
            size="1.438rem"
          />
          {data.map((item, i) => (
            <div key={item._id}>
              {i === current && (
                <>
                  <p
                    style={{
                      color: "var(--offBlack)",
                      fontSize: "1.063rem",
                      fontWeight: "600",
                    }}
                  >
                    Initial Deposit for{" "}
                    <span className="text-danger">{item.fullName}</span> was
                    confirmed successfully. Kindly click the button below to
                    generate docket{" "}
                  </p>
                  <div className="mt-2">
                    <MyButton
                      variant="primary"
                      text="Generate Docket"
                      className="fw-bold mb-3"
                      onClick={() =>
                        navigate(
                          `/dashboard/students/generate-docket/${item._id}`
                        )
                      }
                    />
                  </div>
                  <p style={pStyle} className="cursor" onClick={closeModal}>
                    Go Back
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </MyModal>
  );
}
