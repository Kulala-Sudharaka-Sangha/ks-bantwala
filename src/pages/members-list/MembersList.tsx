import "./MembersList.scss";
import { useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCircleInfo,
  faDroplet,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const membersInfo = [
  {
    id: 1,
    voterID: "1234567890",
    name: "Sansa Kulal",
    fatherOrHusbendName: "Eddard Kulal",
    address:
      "Bantwala, Karnataka, India, 574211, Near Bantwala Bus Stand, Opposite City Mall, 2nd Floor, Room No. 204, Landmark: Next to State Bank ATM, Pincode: 574211, District: Dakshina Kannada, State: Karnataka, Country: India",
    phNumber: "9876543210",
    bloodGroup: "A+",
    image: "https://loremflickr.com/160/160/person?lock=0",
  },
  {
    id: 2,
    voterID: "2345678901",
    name: "Arya Kulal",
    fatherOrHusbendName: "Eddard Kulal",
    address: "Bantwala, Karnataka, India, 574211, Near Market",
    phNumber: "8765432109",
    bloodGroup: "B+",
    image: "https://loremflickr.com/160/160/person?lock=1",
  },
  {
    id: 3,
    voterID: "3456789012",
    name: "Bran Kulal",
    fatherOrHusbendName: "Eddard Kulal",
    address: "Bantwala, Karnataka, India, 574211, Main Road",
    phNumber: "7654321098",
    bloodGroup: "O+",
    image: "https://loremflickr.com/160/160/person?lock=2",
  },
  {
    id: 4,
    voterID: "4567890123",
    name: "Robb Kulal",
    fatherOrHusbendName: "Eddard Kulal",
    address: "Bantwala, Karnataka, India, 574211, Near Temple",
    phNumber: "6543210987",
    bloodGroup: "AB+",
    image: "https://loremflickr.com/160/160/person?lock=3",
  },
  {
    id: 5,
    voterID: "5678901234",
    name: "Jon Kulal",
    fatherOrHusbendName: "Rhaegar Kulal",
    address: "Bantwala, Karnataka, India, 574211, Hilltop",
    phNumber: "5432109876",
    bloodGroup: "A-",
    image: "https://loremflickr.com/160/160/person?lock=4",
  },
  {
    id: 6,
    voterID: "6789012345",
    name: "Rickon Kulal",
    fatherOrHusbendName: "Eddard Kulal",
    address: "Bantwala, Karnataka, India, 574211, Riverside",
    phNumber: "4321098765",
    bloodGroup: "B-",
    image: "https://loremflickr.com/160/160/person?lock=5",
  },
  {
    id: 7,
    voterID: "7890123456",
    name: "Catelyn Kulal",
    fatherOrHusbendName: "Hoster Kulal",
    address: "Bantwala, Karnataka, India, 574211, South Street",
    phNumber: "3210987654",
    bloodGroup: "O-",
    image: "https://loremflickr.com/160/160/person?lock=6",
  },
  {
    id: 8,
    voterID: "8901234567",
    name: "Theon Kulal",
    fatherOrHusbendName: "Balon Kulal",
    address: "Bantwala, Karnataka, India, 574211, North Street",
    phNumber: "2109876543",
    bloodGroup: "AB-",
    image: "https://loremflickr.com/160/160/person?lock=7",
  },
  {
    id: 9,
    voterID: "9012345678",
    name: "Samwell Kulal",
    fatherOrHusbendName: "Randyll Kulal",
    address: "Bantwala, Karnataka, India, 574211, East End",
    phNumber: "1098765432",
    bloodGroup: "A+",
    image: "https://loremflickr.com/160/160/person?lock=8",
  },
  {
    id: 10,
    voterID: "0123456789",
    name: "Gilly Kulal",
    fatherOrHusbendName: "Craster Kulal",
    address: "Bantwala, Karnataka, India, 574211, West End",
    phNumber: "1987654321",
    bloodGroup: "B+",
    image: "https://loremflickr.com/160/160/person?lock=9",
  },
  {
    id: 11,
    voterID: "1123456789",
    name: "Brienne Kulal",
    fatherOrHusbendName: "Selwyn Kulal",
    address: "Bantwala, Karnataka, India, 574211, Lake View",
    phNumber: "2876543210",
    bloodGroup: "O+",
    image: "https://loremflickr.com/160/160/person?lock=10",
  },
  {
    id: 12,
    voterID: "1223456789",
    name: "Podrick Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Garden Area",
    phNumber: "3765432109",
    bloodGroup: "AB+",
    image: "https://loremflickr.com/160/160/person?lock=11",
  },
  {
    id: 13,
    voterID: "1323456789",
    name: "Davos Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Near School",
    phNumber: "4654321098",
    bloodGroup: "A-",
    image: "https://loremflickr.com/160/160/person?lock=12",
  },
  {
    id: 14,
    voterID: "1423456789",
    name: "Melisandre Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Near Hospital",
    phNumber: "5543210987",
    bloodGroup: "B-",
    image: "https://loremflickr.com/160/160/person?lock=13",
  },
  {
    id: 15,
    voterID: "1523456789",
    name: "Jorah Kulal",
    fatherOrHusbendName: "Jeor Kulal",
    address: "Bantwala, Karnataka, India, 574211, Central Park",
    phNumber: "6432109876",
    bloodGroup: "O-",
    image: "https://loremflickr.com/160/160/person?lock=14",
  },
  {
    id: 16,
    voterID: "1623456789",
    name: "Daario Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Green Lane",
    phNumber: "7321098765",
    bloodGroup: "AB-",
    image: "https://loremflickr.com/160/160/person?lock=15",
  },
  {
    id: 17,
    voterID: "1723456789",
    name: "Missandei Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Coastal Road",
    phNumber: "8210987654",
    bloodGroup: "A+",
    image: "https://loremflickr.com/160/160/person?lock=16",
  },
  {
    id: 18,
    voterID: "1823456789",
    name: "Greyworm Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Hill Road",
    phNumber: "9109876543",
    bloodGroup: "B+",
    image: "https://loremflickr.com/160/160/person?lock=17",
  },
  {
    id: 19,
    voterID: "1923456789",
    name: "Tormund Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Mountain View",
    phNumber: "1098765432",
    bloodGroup: "O+",
    image: "https://loremflickr.com/160/160/person?lock=18",
  },
  {
    id: 20,
    voterID: "2023456789",
    name: "Ygritte Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Snowy Hill",
    phNumber: "2109876543",
    bloodGroup: "A+",
    image: "https://loremflickr.com/160/160/person?lock=19",
  },
  {
    id: 21,
    voterID: "2123456789",
    name: "Ghost Kulal",
    fatherOrHusbendName: "Unknown Kulal",
    address: "Bantwala, Karnataka, India, 574211, Winterfell",
    phNumber: "3210987654",
    bloodGroup: "B+",
    image: "https://loremflickr.com/160/160/person?lock=20",
  },
];

const MembersList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(membersInfo);

  const searchHandler = (value: string) => {
    setSearchTerm(value);
    const keyword = value.toLowerCase();
    setFilteredMembers(
      membersInfo.filter((member) =>
        Object.values(member).some((field) =>
          String(field).toLowerCase().includes(keyword)
        )
      )
    );
  };

  return (
    <div className="all-members-list">
      <div className="page-title">
        <div className="title">Lifetime members</div>
        <div className="search-box-container">
          <InputBox
            id="search"
            name="search"
            type={InputTypes.Text}
            label="Search"
            value={searchTerm}
            isRequired
            setInputValue={(value: string) => searchHandler(value)}
          />
        </div>
      </div>
      <div className="page-description">
        <p>
          <FontAwesomeIcon icon={faCircleInfo} className="highlight" /> Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
      <div className="search-box-container-mobile">
        <InputBox
          id="first-name"
          name="first-name"
          type={InputTypes.Text}
          label="First Name"
          value={searchTerm}
          isRequired
          setInputValue={(_value) => searchHandler}
        />
      </div>
      <div className="members-list-container">
        {filteredMembers.map((member) => (
          <div key={member.id} className="member-list-card">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <div className="member-details">
              <div className="member-name">
                <p>
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <span className="name">{member.name}</span>
                  <span className="member-role">
                    &nbsp;/ {member.fatherOrHusbendName}
                  </span>
                </p>
              </div>

              <p className="member-address">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                {member.address}
              </p>
              <p className="member-phone">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                {member.phNumber}
              </p>
              <p className="member-blood-group">
                <FontAwesomeIcon icon={faDroplet} className="icon" />
                {member.bloodGroup}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
