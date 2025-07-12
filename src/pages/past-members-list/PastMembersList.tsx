import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PastMembersList.scss";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const PastMembersData = [
  {
    id: "1",
    year: "1990-91",
    president: "Sansa Kulal",
    secretary: "Arya Kulal",
    treasure: "John Kulal",
  },
  {
    id: "2",
    year: "1991-92",
    president: "Ravi Kulal",
    secretary: "Meera Kulal",
    treasure: "Kiran Kulal",
  },
  {
    id: "3",
    year: "1992-93",
    president: "Latha Kulal",
    secretary: "Naveen Kulal",
    treasure: "Deepa Kulal",
  },
  {
    id: "4",
    year: "1993-94",
    president: "Ganesh Kulal",
    secretary: "Priya Kulal",
    treasure: "Suresh Kulal",
  },
  {
    id: "5",
    year: "1994-95",
    president: "Sunil Kulal",
    secretary: "Radha Kulal",
    treasure: "Vijay Kulal",
  },
  {
    id: "6",
    year: "1995-96",
    president: "Kavya Kulal",
    secretary: "Ramesh Kulal",
    treasure: "Sneha Kulal",
  },
  {
    id: "7",
    year: "1996-97",
    president: "Manoj Kulal",
    secretary: "Divya Kulal",
    treasure: "Harish Kulal",
  },
  {
    id: "8",
    year: "1997-98",
    president: "Shilpa Kulal",
    secretary: "Arun Kulal",
    treasure: "Lakshmi Kulal",
  },
  {
    id: "9",
    year: "1998-99",
    president: "Vikas Kulal",
    secretary: "Pooja Kulal",
    treasure: "Rohit Kulal",
  },
  {
    id: "10",
    year: "1999-00",
    president: "Anil Kulal",
    secretary: "Geeta Kulal",
    treasure: "Sanjay Kulal",
  },
  // ... add more years as needed
  {
    id: "31",
    year: "2020-21",
    president: "Sansa Kulal",
    secretary: "Arya Kulal",
    treasure: "John Kulal",
  },
  {
    id: "32",
    year: "2021-22",
    president: "Ravi Kulal",
    secretary: "Meera Kulal",
    treasure: "Kiran Kulal",
  },
  {
    id: "33",
    year: "2022-23",
    president: "Latha Kulal",
    secretary: "Naveen Kulal",
    treasure: "Deepa Kulal",
  },
  {
    id: "34",
    year: "2023-24",
    president: "Ganesh Kulal",
    secretary: "Priya Kulal",
    treasure: "Suresh Kulal",
  },
  {
    id: "35",
    year: "2024-25",
    president: "Sunil Kulal",
    secretary: "Radha Kulal",
    treasure: "Vijay Kulal",
  },
  {
    id: "36",
    year: "2025-26",
    president: "Kavya Kulal",
    secretary: "Ramesh Kulal",
    treasure: "Sneha Kulal",
  },
];

const PastMembersList = () => {
  return (
    <div className="past-members-list">
      <div className="page-title">Past Committee Members List</div>
      <div className="page-description">
        <p>
          <FontAwesomeIcon icon={faCircleInfo} className="highlight" /> Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
      <div className="members-table">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>President</th>
              <th>Secretary</th>
              <th>Secretary</th>
            </tr>
          </thead>
          <tbody>
            {PastMembersData.map((data) => (
              <tr key={data.id}>
                <td className="table-year">{data.year}</td>
                <td>{data.president}</td>
                <td>{data.secretary}</td>
                <td>{data.treasure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastMembersList;
