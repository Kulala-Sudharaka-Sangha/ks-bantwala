import "./CommitteeMembers.scss";

const CommitteeMembers = () => {
  const membersInfo = {
    id: "members-list",
    teamName: "2025-26 Kulala Sudharaka Sangha(R.) Bantwala Committee",
    aboutTeam:
      "The Kulala Sudharaka Sangha (R.) Bantwala is a community organization dedicated to the welfare and development of the Kulala community in Bantwala. Our mission is to promote cultural heritage, support members in need, and foster unity among the community.",
    members: [
      {
        id: "member-1",
        name: "Sansa Kulal",
        role: "Role One",
        image: "https://loremflickr.com/160/160/person?lock=0",
        bloodGroup: "A+",
        address: "Bantwala, Karnataka",
        phNumber: "9876543210",
      },
      {
        id: "member-2",
        name: "Arya Kulal",
        role: "Role Two",
        image: "https://loremflickr.com/160/160/person?lock=2",
        bloodGroup: "B+",
        address: "Mangalore, Karnataka",
        phNumber: "9876543211",
      },
      {
        id: "member-3",
        name: "Jon Kulal",
        role: "Role Three",
        image: "https://loremflickr.com/160/160/person?lock=3",
        bloodGroup: "O+",
        address: "Puttur, Karnataka",
        phNumber: "9876543212",
      },
      {
        id: "member-4",
        name: "Robb Kulal",
        role: "Role Four",
        image: "https://loremflickr.com/160/160/person?lock=4",
        bloodGroup: "AB+",
        address: "Ullal, Karnataka",
        phNumber: "9876543213",
      },
      {
        id: "member-5",
        name: "Rickon Kulal",
        role: "Role Five",
        image: "https://loremflickr.com/160/160/person?lock=5",
        bloodGroup: "A-",
        address: "Moodbidri, Karnataka",
        phNumber: "9876543214",
      },
      {
        id: "member-6",
        name: "Bran Kulal",
        role: "Role Six",
        image: "https://loremflickr.com/160/160/person?lock=6",
        bloodGroup: "B-",
        address: "Belthangady, Karnataka",
        phNumber: "9876543215",
      },
      {
        id: "member-7",
        name: "Theon Kulal",
        role: "Role Seven",
        image: "https://loremflickr.com/160/160/person?lock=7",
        bloodGroup: "O-",
        address: "Karkala, Karnataka",
        phNumber: "9876543216",
      },
      {
        id: "member-8",
        name: "Samwell Kulal",
        role: "Role Eight",
        image: "https://loremflickr.com/160/160/person?lock=8",
        bloodGroup: "AB-",
        address: "Surathkal, Karnataka",
        phNumber: "9876543217",
      },
      {
        id: "member-9",
        name: "Gendry Kulal",
        role: "Role Nine",
        image: "https://loremflickr.com/160/160/person?lock=9",
        bloodGroup: "A+",
        address: "Bajpe, Karnataka",
        phNumber: "9876543218",
      },
      {
        id: "member-10",
        name: "Podrick Kulal",
        role: "Role Ten",
        image: "https://loremflickr.com/160/160/person?lock=10",
        bloodGroup: "B+",
        address: "Mulki, Karnataka",
        phNumber: "9876543219",
      },
      {
        id: "member-11",
        name: "Brienne Kulal",
        role: "Role Eleven",
        image: "https://loremflickr.com/160/160/person?lock=11",
        bloodGroup: "O+",
        address: "Venur, Karnataka",
        phNumber: "9876543220",
      },
      {
        id: "member-12",
        name: "Davos Kulal",
        role: "Role Twelve",
        image: "https://loremflickr.com/160/160/person?lock=12",
        bloodGroup: "AB+",
        address: "Kinnigoli, Karnataka",
        phNumber: "9876543221",
      },
      {
        id: "member-13",
        name: "Jorah Kulal",
        role: "Role Thirteen",
        image: "https://loremflickr.com/160/160/person?lock=13",
        bloodGroup: "A-",
        address: "Kateel, Karnataka",
        phNumber: "9876543222",
      },
      {
        id: "member-14",
        name: "Missandei Kulal",
        role: "Role Fourteen",
        image: "https://loremflickr.com/160/160/person?lock=14",
        bloodGroup: "B-",
        address: "Panemangalore, Karnataka",
        phNumber: "9876543223",
      },
      {
        id: "member-15",
        name: "Greyworm Kulal",
        role: "Role Fifteen",
        image: "https://loremflickr.com/160/160/person?lock=15",
        bloodGroup: "O-",
        address: "Vitla, Karnataka",
        phNumber: "9876543224",
      },
      {
        id: "member-16",
        name: "Tormund Kulal",
        role: "Role Sixteen",
        image: "https://loremflickr.com/160/160/person?lock=16",
        bloodGroup: "AB-",
        address: "Beltangady, Karnataka",
        phNumber: "9876543225",
      },
      {
        id: "member-17",
        name: "Ygritte Kulal",
        role: "Role Seventeen",
        image: "https://loremflickr.com/160/160/person?lock=17",
        bloodGroup: "A+",
        address: "Puttur, Karnataka",
        phNumber: "9876543226",
      },
      {
        id: "member-18",
        name: "Sandor Kulal",
        role: "Role Eighteen",
        image: "https://loremflickr.com/160/160/person?lock=18",
        bloodGroup: "B+",
        address: "Bantwala, Karnataka",
        phNumber: "9876543227",
      },
      {
        id: "member-19",
        name: "Petyr Kulal",
        role: "Role Nineteen",
        image: "https://loremflickr.com/160/160/person?lock=19",
        bloodGroup: "O+",
        address: "Mangalore, Karnataka",
        phNumber: "9876543228",
      },
      {
        id: "member-20",
        name: "Varys Kulal",
        role: "Role Twenty",
        image: "https://loremflickr.com/160/160/person?lock=20",
        bloodGroup: "AB+",
        address: "Moodbidri, Karnataka",
        phNumber: "9876543229",
      },
      {
        id: "member-21",
        name: "Shae Kulal",
        role: "Role Twenty-One",
        image: "https://loremflickr.com/160/160/person?lock=21",
        bloodGroup: "A-",
        address: "Ullal, Karnataka",
        phNumber: "9876543230",
      },
      {
        id: "member-22",
        name: "Jaqen Kulal",
        role: "Role Twenty-Two",
        image: "https://loremflickr.com/160/160/person?lock=22",
        bloodGroup: "B-",
        address: "Karkala, Karnataka",
        phNumber: "9876543231",
      },
      {
        id: "member-23",
        name: "Daario Kulal",
        role: "Role Twenty-Three",
        image: "https://loremflickr.com/160/160/person?lock=23",
        bloodGroup: "O-",
        address: "Surathkal, Karnataka",
        phNumber: "9876543232",
      },
      {
        id: "member-24",
        name: "Gilly Kulal",
        role: "Role Twenty-Four",
        image: "https://loremflickr.com/160/160/person?lock=24",
        bloodGroup: "AB-",
        address: "Mulki, Karnataka",
        phNumber: "9876543233",
      },
      {
        id: "member-25",
        name: "Meera Kulal",
        role: "Role Twenty-Five",
        image: "https://loremflickr.com/160/160/person?lock=25",
        bloodGroup: "A+",
        address: "Venur, Karnataka",
        phNumber: "9876543234",
      },
    ],
  };

  return (
    <div className="members-list">
      <div className="page-title">
        {membersInfo.teamName}
        <span className="highlight"> Members</span>
      </div>
      <div className="about-team">
        <p>{membersInfo.aboutTeam}</p>
      </div>
      <div className="members-list">
        {membersInfo.members.map((member, index) => (
          <div key={member.id} className="member-card">
            <div
              className={`member-image-container ${
                index === 0
                  ? "red-border"
                  : index === 1
                  ? "orange-border"
                  : index === 2
                  ? "green-border"
                  : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
                loading="lazy"
                style={{ background: "#eee" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "";
                }}
              />
            </div>
            <div className="member-info">
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeMembers;
