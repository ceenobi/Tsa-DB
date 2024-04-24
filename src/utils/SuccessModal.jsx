import Modal from "react-bootstrap/Modal";
import { vector4 } from "@assets";
import { success } from "@assets";
import { Image } from "react-bootstrap";

function SuccessModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="text-center ">
        {/* <Image src={vector4} className={`img-fluid`} style={{position:"absolute",top:"",left:"0",zIndex:"-2",height:"100%",width:"100%"}} /> */}
        <Image
          src={success}
          className="img-fluid position-relative"
          style={{ width: "200px", height: "100px", zIndex: 3 }}
        />
      </div>
      <div className=" p-1">
        <h2 className="text-center text-primary fs-5 fw-bold mt-5">
          Details Uploaded Successfully!!!
        </h2>
        <p className="fw-bold text-center text-secondary mb-5">
          Your details have been successfully uploaded to the Tech Studio
          Academy’s database.
        </p>
      </div>
    </Modal>
  );
}

export default SuccessModal;
