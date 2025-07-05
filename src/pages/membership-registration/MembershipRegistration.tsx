import "./MembershipRegistration.scss";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { useEffect, useState } from "react";
import CheckBox from "../../components/check-box/ChckBox";

const MembershipRegistration = () => {
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
              <div className="title">Membership Declaration</div>
              <div className="declaration-info">
                <ul>
                  <li>I am above 18 years of age.</li>
                  <li>I belong to the Moolya / Kulala / Handa community.</li>
                  <li>
                    I am currently residing in Bangalore and my native place is
                    in the districts of Dakshina Kannada / Udupi / Kodagu /
                    Kasaragodu or nearby districts.
                  </li>
                  <li>
                    I understand that the membership request is subject to
                    approval by the Executive Committee.
                  </li>
                  <li>
                    I agree to pay the membership fee of INR 500/-, which is a
                    one-time lifetime membership fee.
                  </li>
                  <li>
                    As a member, I will be eligible to vote and participate in
                    the selection of the committee members once every year.
                  </li>
                  <li>
                    The information provided by me is true and correct to the
                    best of my knowledge.
                  </li>
                  <li>
                    I agree to abide by the rules and regulations of the Kulala
                    Sudharaka Sangha (R.) Bantwala.
                  </li>
                </ul>
              </div>
              <button className="btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="form-container">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-title">
            <p>MEMBER REGISTRATION</p>
          </div>
          <div className="input-row">
            <InputBox
              id="first-name"
              name="first-name"
              type={InputTypes.Text}
              label="First Name"
              value={firstName}
              isRequired
              setInputValue={(value) => setFirstName(value)}
            />
            <InputBox
              id="second-name"
              name="second-name"
              type={InputTypes.Text}
              label="Second Name"
              value={secondName}
              isRequired
              setInputValue={(value) => setSecondName(value)}
            />
            <InputBox
              id="father-husband-name"
              name="father-husband-name"
              type={InputTypes.Text}
              label="Father/Husband Name"
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
              label="Phone Number"
              value={phoneNumber}
              isRequired
              setInputValue={(value) => setPhoneNumber(value)}
            />
            <InputBox
              id="emailId"
              name="emailId"
              type={InputTypes.Text}
              label="Email ID (Optional)"
              value={emailId}
              setInputValue={(value) => setEmailId(value)}
            />
            <div className="date-of-birth">
              <InputBox
                id="date-of-birth"
                name="date-of-birth"
                type={InputTypes.Date}
                label="Date of Birth"
                value={dateOfBirth}
                isRequired
                setInputValue={(value) => setDateOfBirth(value)}
              />
              {dateOfBirth && <div className="age-label">{age} Years</div>}
            </div>
          </div>
          <div className="input-row">
            <InputBox
              id="profession"
              name="profession"
              type={InputTypes.Text}
              label="Profession"
              value={profession}
              setInputValue={(value) => setProfession(value)}
            />
            <InputBox
              id="blood-group"
              name="blood-group"
              type={InputTypes.DropDown}
              label="Blood Group"
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
              label="Hobby/Interest"
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
                  placeholder="Residential Address"
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
                  placeholder="Permanent Address"
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
              label="Passport Size Photo"
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
          <div className="input-row">
            <CheckBox
              id="accept-declaration"
              name="accept-declaration"
              label=""
              value={isAcceptDeclaration}
              toggleCheckBox={setIsAcceptDeclaration}
            />
            <span className="checkbox-label">
              I accept the
              <strong> Kulala Sudharaka Sangha (R) Bantwala </strong>
              Membership{" "}
              <span
                className="declaration-link"
                onClick={() => setShowModal(true)}
              >
                Declaration
              </span>
            </span>
          </div>
          <button type="submit" className="btn">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipRegistration;
