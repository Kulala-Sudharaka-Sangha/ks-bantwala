import "./MembershipRegistration.scss";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { useEffect, useState } from "react";
import CheckBox from "../../components/check-box/ChckBox";
import { useTranslation } from "react-i18next";

const MembershipRegistration = () => {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [fatherHusbandName, setFatherHusbandName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [profession, setProfession] = useState("");
  const [hobbyInterest, setHobbyInterest] = useState("");
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [isAcceptDeclaration, setIsAcceptDeclaration] = useState(false);
  const [_fileName, setFileName] = useState("");
  const [_memberPhoto, setMemberPhoto] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        calculatedAge--;
      }

      setAge(calculatedAge.toString());
    } else {
      setAge("");
    }
  }, [dateOfBirth]);

  function handleSelectedFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target?.result) {
        setPreviewImgSrc(event.target.result as string);
      }
    };

    setFileName(selectedFile.name);
    setMemberPhoto(selectedFile);
    reader.readAsDataURL(selectedFile);
  }

  return (
    <div className="membership-registration">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <div className="title">{t("registration.declaration.title")}</div>
              <div className="declaration-info">
                <ul>
                  <li>{t("registration.declaration.point1")}</li>
                  <li>{t("registration.declaration.point2")}</li>
                  <li>{t("registration.declaration.point3")}</li>
                  <li>{t("registration.declaration.point4")}</li>
                  <li>{t("registration.declaration.point5")}</li>
                  <li>{t("registration.declaration.point6")}</li>
                  <li>{t("registration.declaration.point7")}</li>
                  <li>{t("registration.declaration.point8")}</li>
                </ul>
              </div>
              <button className="btn" onClick={() => setShowModal(false)}>
                {t("registration.declaration.closeBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="form-container">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-title">
            <p>{t("registration.formTitle")}</p>
          </div>
          <div className="input-row">
            <InputBox
              id="first-name"
              name="first-name"
              type={InputTypes.Text}
              label={t("registration.firstName")}
              value={firstName}
              isRequired
              setInputValue={(value) => setFirstName(value)}
            />
            <InputBox
              id="second-name"
              name="second-name"
              type={InputTypes.Text}
              label={t("registration.secondName")}
              value={secondName}
              isRequired
              setInputValue={(value) => setSecondName(value)}
            />
            <InputBox
              id="father-husband-name"
              name="father-husband-name"
              type={InputTypes.Text}
              label={t("registration.fatherHusbandName")}
              value={fatherHusbandName}
              isRequired
              setInputValue={(value) => setFatherHusbandName(value)}
            />
          </div>
          <div className="input-row">
            <InputBox
              id="phone-number"
              name="phone-number"
              type={InputTypes.Number}
              label={t("registration.phoneNumber")}
              value={phoneNumber}
              isRequired
              setInputValue={(value) => setPhoneNumber(value)}
            />
            <InputBox
              id="emailId"
              name="emailId"
              type={InputTypes.Text}
              label={t("registration.emailId")}
              value={emailId}
              setInputValue={(value) => setEmailId(value)}
            />
            <div className="date-of-birth">
              <InputBox
                id="date-of-birth"
                name="date-of-birth"
                type={InputTypes.Date}
                label={t("registration.dateOfBirth")}
                value={dateOfBirth}
                isRequired
                setInputValue={(value) => setDateOfBirth(value)}
              />
              {dateOfBirth && <div className="age-label">{age} {t("registration.years")}</div>}
            </div>
          </div>
          <div className="input-row">
            <InputBox
              id="profession"
              name="profession"
              type={InputTypes.Text}
              label={t("registration.profession")}
              value={profession}
              setInputValue={(value) => setProfession(value)}
            />
            <InputBox
              id="blood-group"
              name="blood-group"
              type={InputTypes.DropDown}
              label={t("registration.bloodGroup")}
              options={[
                { id: "A+", title: "A+" },
                { id: "A-", title: "A-" },
                { id: "B+", title: "B+" },
                { id: "B-", title: "B-" },
                { id: "O+", title: "O+" },
                { id: "O-", title: "O-" },
                { id: "AB+", title: "AB+" },
                { id: "AB-", title: "AB-" },
              ]}
              value={bloodGroup}
              isRequired
              setInputValue={(value) => setBloodGroup(value)}
            />
          </div>
          <div className="input-row">
            <InputBox
              id="hobby-interest"
              name="hobby-interest"
              type={InputTypes.Text}
              label={t("registration.hobbyInterest")}
              value={hobbyInterest}
              setInputValue={(value) => setHobbyInterest(value)}
            />
          </div>
          <div className="input-row">
            <div className="input-container">
              <div className="mat-input-wrapper">
                <textarea
                  name="address"
                  id="address"
                  className="input-field"
                  placeholder={t("registration.residentialAddress")}
                  value={residentialAddress}
                  onChange={(e) => setResidentialAddress(e.target.value)}
                  required
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="input-container">
              <div className="mat-input-wrapper">
                <textarea
                  name="address"
                  id="address"
                  className="input-field"
                  placeholder={t("registration.permanentAddress")}
                  value={permanentAddress}
                  onChange={(e) => setPermanentAddress(e.target.value)}
                  required
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="input-row image-selection">
            <InputBox
              id="member-photo"
              name="member-photo"
              type={InputTypes.File}
              label={t("registration.uploadPhoto")}
              value={""}
              setInputValue={() => {}}
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
          </div>
          <div className="input-row declaration">
            <CheckBox
              id="accept-declaration"
              name="accept-declaration"
              label=""
              value={isAcceptDeclaration}
              toggleCheckBox={setIsAcceptDeclaration}
            />
            <span className="checkbox-label">
              {t("registration.acceptDeclaration")}{" "}
              <strong> Kulala Sudharaka Sangha (R) Bantwala </strong>{" "}
              <span
                className="declaration-link"
                onClick={() => setShowModal(true)}
              >
                {t("registration.declarationLink")}
              </span>
            </span>
          </div>
          <button type="submit" className="btn">
            {t("registration.createBtn")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipRegistration;
