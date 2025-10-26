import React, { useEffect, useState } from "react";
import "./PaymentPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCopy,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { PaymentCause } from "../../utils/payment";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Loading from "../../components/loading/Loading";
import { RoutesList } from "../../utils/master-menu";
import useNavigation from "../../hooks/useNavigation";
import buildingFundQR from "../../assets/payment-qr-code/kattada-nidhi.png";
import educationFundQR from "../../assets/payment-qr-code/vidhya-nidhi.png";

const PaymentQRs = {
  [PaymentCause.BuildingFund]: buildingFundQR,
  [PaymentCause.EducationFund]: educationFundQR,
  [PaymentCause.Membership]: educationFundQR,
};

const UPI_IDS = {
  [PaymentCause.BuildingFund]: "kulalabantwal@kbl",
  [PaymentCause.EducationFund]: "322212844250973@cnrb",
  [PaymentCause.Membership]: "322212844250973@cnrb",
};

interface PaymentData {
  firstName?: string;
  secondName?: string;
  fatherHusbandName?: string;
  phoneNumber?: string;
  emailId?: string;
  dateOfBirth?: string;
  age?: string;
  profession?: string;
  bloodGroup?: string;
  hobbyInterest?: string;
  residentialAddress?: string;
  permanentAddress?: string;
  payerName?: string;
  memberPhoto?: any;
  proofPhoto: any;
}

export default function PaymentPage(): React.ReactElement {
  const [amount, setAmount] = useState<number | "">("");
  const [upiId, setUpiId] = useState<string>(
    UPI_IDS[PaymentCause.EducationFund]
  );
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [payerName, setPayerName] = useState("");
  const [_fileName, setFileName] = useState("");
  const [_proofPhoto, setProofPhoto] = useState<File | null>(null);
  const [causeOfPayment, setCauseOfPayment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [qrCodeImage, setQrCodeImage] = useState<string>("");

  const navigation = useNavigation();

  useEffect(() => {
    const paymentCause = localStorage.getItem("paymentCause");
    if (paymentCause) {
      setCauseOfPayment(paymentCause);
      switch (paymentCause) {
        case PaymentCause.BuildingFund:
          setUpiId(UPI_IDS[PaymentCause.BuildingFund]);
          setQrCodeImage(PaymentQRs[PaymentCause.BuildingFund]);
          break;
        case PaymentCause.EducationFund:
          setUpiId(UPI_IDS[PaymentCause.EducationFund]);
          setQrCodeImage(PaymentQRs[PaymentCause.EducationFund]);
          break;
        case PaymentCause.Membership:
          setUpiId(UPI_IDS[PaymentCause.Membership]);
          setQrCodeImage(PaymentQRs[PaymentCause.Membership]);
          break;
        default:
          setUpiId(UPI_IDS[PaymentCause.EducationFund]);
          setQrCodeImage(PaymentQRs[PaymentCause.EducationFund]);
      }
    } else {
      navigation.handleNavigation(RoutesList.HOME);
    }
  }, []);

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (causeOfPayment !== PaymentCause.Membership && !payerName.trim()) {
      setStatusMessage("Payer Name is required");
      return;
    }
    if (!_proofPhoto) {
      setStatusMessage("Payment proof photo is required");
      return;
    }
    setTimeout(() => {
      setStatusMessage(null);
    }, 2500);

    const userData = localStorage.getItem("userInformation");

    let paymentData: PaymentData = {
      proofPhoto: _proofPhoto,
    };

    if (causeOfPayment === PaymentCause.Membership) {
      if (!userData) {
        setStatusMessage("User information not found. Please register again.");
        return;
      }
      const {
        firstName,
        secondName,
        fatherHusbandName,
        phoneNumber,
        emailId,
        dateOfBirth,
        age,
        profession,
        bloodGroup,
        hobbyInterest,
        residentialAddress,
        permanentAddress,
        memberPhoto,
      } = userData ? JSON.parse(userData) : {};

      paymentData = {
        ...paymentData,
        firstName: firstName,
        secondName: secondName,
        fatherHusbandName: fatherHusbandName,
        phoneNumber: phoneNumber,
        emailId: emailId,
        dateOfBirth: dateOfBirth,
        age: age,
        profession: profession,
        bloodGroup: bloodGroup,
        hobbyInterest: hobbyInterest,
        residentialAddress: residentialAddress,
        permanentAddress: permanentAddress,
        payerName: payerName,
        memberPhoto: memberPhoto,
      };
    }

    const fileToBase64 = (file: File) =>
      new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

    if (_proofPhoto) {
      paymentData.proofPhoto = await fileToBase64(_proofPhoto);
    }

    try {
      setIsLoading(true);
      await addDoc(collection(db, "payments"), {
        ...paymentData,
        amount: amount === "" ? null : amount,
        causeOfPayment,
        createdAt: serverTimestamp(),
      });
      localStorage.removeItem("userInformation");
      localStorage.removeItem("paymentCause");
      setProofPhoto(null);
      setPreviewImgSrc("");
      setFileName("");
      setPayerName("");
      setAmount("");
      setIsSuccess(true);
    } catch (err: any) {
      setStatusMessage(err?.message || "Failed to submit payment.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleCopyUpi() {
    navigator.clipboard.writeText(upiId);
  }

  const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPreviewImgSrc(event.target.result as string);
      }
    };

    setFileName(selectedFile.name);
    setProofPhoto(selectedFile);
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="payment-page">
      <h1 className="payment-page-title">Payment & Upload Proof</h1>
      <p>
        <FontAwesomeIcon icon={faCircleInfo} className="highlight" /> We are
        thrilled to welcome all members who registered as Lifetime Members! Your
        continued support strengthens our community and ensures lasting
        benefits, exclusive updates, and lifelong access to our events and
        resources. Thank you for joining us!
      </p>
      <p className="blink-text">Do Not Refresh This Page</p>
      {isLoading && <Loading />}
      {isSuccess && (
        <div className="success-message">
          <h2>Payment Submitted Successfully!</h2>
          <p>
            Thank you for your payment. We have received your payment proof and
            will process it shortly.
          </p>
          <button
            className="btn"
            onClick={() => navigation.handleNavigation(RoutesList.HOME)}
          >
            Go to Home
          </button>
        </div>
      )}
      {!isLoading && !isSuccess && (
        <div className="payment-page-content">
          <div className="qr-code">
            <h2 className="payment-card-title">Scan & Pay</h2>
            <div className="qr-wrapper" aria-hidden={false}></div>
            <img src={qrCodeImage} alt="Payment QR" className="qr-image" />
            <div className="payment-info">
              <code className="upi-code">{upiId}</code>
              <FontAwesomeIcon
                icon={faCopy}
                className="copy-icon"
                onClick={handleCopyUpi}
              />
            </div>
          </div>
          <div className="form-card">
            <h2 className="form-card-title">Upload Payment Proof</h2>
            <form onSubmit={handleSubmit}>
              {causeOfPayment !== PaymentCause.Membership && (
                <InputBox
                  id="payer-name"
                  name="payer-name"
                  type={InputTypes.Text}
                  label="Payer Name"
                  value={payerName}
                  isRequired
                  setInputValue={(value) => setPayerName(value)}
                />
              )}
              <InputBox
                id="proof-photo"
                name="proof-photo"
                type={InputTypes.File}
                label="Upload Payment Proof"
                value={""}
                setInputValue={() => {}}
                isRequired
                handleSelectedFile={handleSelectedFile}
              />
              {previewImgSrc && (
                <img
                  id="brand-logo"
                  className="image-preview"
                  src={previewImgSrc}
                  alt="Image Preview"
                />
              )}
              <button className="btn" type="submit">
                Submit
              </button>
              {statusMessage && (
                <div className="form-status">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="error-icon"
                  />
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
