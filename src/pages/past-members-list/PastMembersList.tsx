import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PastMembersList.scss";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const PastMembersData = [
  {
    id: "1980-81",
    year: "1980–81",
    president: "ಜನಾರ್ದನ ಕುಲಾಲ್ ಮೈರಾನ್ ಪಾದೆ",
    secretary: "ಚಂದ್ರಶೇಖರ",
    treasurer: "ಎಂ. ಭೋಜನ್",
  },
  {
    id: "1981-82",
    year: "1981–82",
    president: "ಚೆನ್ನಪ್ಪ ಮೂಲ್ಯ",
    secretary: "ಆನಂದ ಮೈರಾನ್ ಪಾದೆ",
    treasurer: "ಜಯರಾಮ್",
  },
  {
    id: "1982-83",
    year: "1982–83",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ಡೊಂಬಯ್ಯ",
    treasurer: "ಗೋಪಾಲ ಸಾಲಿಯಾನ್",
  },
  {
    id: "1983-84",
    year: "1983–84",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ಡೊಂಬಯ್ಯ",
    treasurer: "ಗೋಪಾಲ ಸಾಲಿಯಾನ್",
  },
  {
    id: "1984-85",
    year: "1984–85",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ಡೊಂಬಯ್ಯ",
    treasurer: "ಭೋಜ ಬಿ.",
  },
  {
    id: "1985-86",
    year: "1985–86",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ಭೋಜ ಬಿ.",
    treasurer: "ದೇವಪ್ಪ ಎಂ.",
  },
  {
    id: "1986-87",
    year: "1986–87",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ಜಯರಾಮ ಬಿ.",
    treasurer: "ದೇವಪ್ಪ ಎಂ.",
  },
  {
    id: "1987-88",
    year: "1987–88",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ಜಯರಾಮ ಬಿ.",
    treasurer: "ದೇವಪ್ಪ ಎಂ.",
  },
  {
    id: "1988-89",
    year: "1988–89",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ ",
    secretary: "ಜಯರಾಮ ಬಿ.",
    treasurer: "ದೇವಪ್ಪ ಎಂ",
  },
  {
    id: "1989-90",
    year: "1989–90",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ದೇವಪ್ಪ ಎಂ.",
    treasurer: "ಸುಭಾಶ್‌ಚಂದ್ರ",
  },
  {
    id: "1990-91",
    year: "1990–91",
    president: "ಹೂವಯ್ಯ ಮೂಲ್ಯ",
    secretary: "ದೇವಪ್ಪ ಎಂ.",
    treasurer: "ಸುಭಾಶ್‌ಚಂದ್ರ",
  },
  {
    id: "1991-92",
    year: "1991–92",
    president: "ಎಂ. ಜನಾರ್ದನ",
    secretary: "ಡಿ. ಎಂ. ಕುಲಾಲ್",
    treasurer: "ಜನಾರ್ದನ ಪೊಸಳ್ಳಿ",
  },
  {
    id: "1992-93",
    year: "1992–93",
    president: "ಎಂ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಪಿ. ಎಸ್. ರುಕ್ಕಯ್ಯ",
  },
  {
    id: "1993-94",
    year: "1993–94",
    president: "ಎಂ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಪಿ. ಎಸ್. ರುಕ್ಕಯ್ಯ",
  },
  {
    id: "1994-95",
    year: "1994–95",
    president: "ಎಂ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಸುಭಾಶ್‌ಚಂದ್ರ",
  },
  {
    id: "1995-96",
    year: "1995–96",
    president: "ಎಂ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಸುಭಾಶ್‌ಚಂದ್ರ",
  },
  {
    id: "1996-97",
    year: "1996–97",
    president: "ಭೋಜ ಸಾಲಿಯಾನ್",
    secretary: "ಸದಾಶಿವ ಬೊಂಡಾಲ",
    treasurer: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
  },
  {
    id: "1997-98",
    year: "1997–98",
    president: "ಮಚ್ಚೇಂದ್ರ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಶ್ರೀನಿವಾಸ ದೈಪಲ",
  },
  {
    id: "1998-99",
    year: "1998–99",
    president: "ಮಚ್ಚೇಂದ್ರ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಡಿ. ಎಂ. ಕುಲಾಲ್",
  },
  {
    id: "1999-20",
    year: "1999–2000",
    president: "ಮಚ್ಚೇಂದ್ರ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಡಿ. ಎಂ. ಕುಲಾಲ್",
  },
  {
    id: "2000-01",
    year: "2000–01",
    president: "ಮಚ್ಚೇಂದ್ರ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಲಕ್ಷ್ಮಣ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
  },
  {
    id: "2001-02",
    year: "2001–02",
    president: "ರಾಮ ಮರ್ದೋಳಿ/ಮಚ್ಚೇಂದ್ರ",
    secretary: "ಲಕ್ಷ್ಮಣ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
    treasurer: "ರಾಧಾಕೃಷ್ಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2002-03",
    year: "2002–03",
    president: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಲಕ್ಷ್ಮಣ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
  },
  {
    id: "2003-04",
    year: "2003–04",
    president: "ಮಚ್ಚೇಂದ್ರ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ರಾಜೇಂದ್ರ ಕುಮಾರ್",
  },
  {
    id: "2004-05",
    year: "2004–05",
    president: "ಸದಾಶಿವ ಬಂಗೇರ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಜಯಂತಿ ಟೀಚರ್",
  },
  {
    id: "2005–06",
    year: "2005–06",
    president: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಕೈಕುಂಜೆ",
    secretary: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆಹಿತ್ತು",
  },
  {
    id: "2006-07",
    year: "2006–07",
    president: "ನಾಗೇಶ್ ಬಾಳೆಹಿತ್ತು",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
  },
  {
    id: "2007-08",
    year: "2007–08",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೈಕುಂಜೆ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
  },
  {
    id: "2008-09",
    year: "2008–09",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೈಕುಂಜೆ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
  },
  {
    id: "2009-10",
    year: "2009–10",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೈಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
  },
  {
    id: "2010-11",
    year: "2010–11",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೈಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
  },
  {
    id: "2011-12",
    year: "2011–12",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೈಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
  },
  {
    id: "2012-13",
    year: "2012–13",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೈಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
  },
  {
    id: "2013-14",
    year: "2013–14",
    president: "ಯಂ. ಲತನ್ ಕುಮಾರ್",
    secretary: "ಜಲಜಾಕ್ಷಿ ಕುಲಾಲ್ ಪಿ.",
    treasurer: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
  },
  {
    id: "2014-15",
    year: "2014–15",
    president: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    secretary: "ದಾಮೋದರ ಮಾಸ್ತರ್ ವಿರ್ಯ",
    treasurer: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
  },
  {
    id: "2015-16",
    year: "2015–16",
    president: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    secretary: "ದಾಮೋದರ ಮಾಸ್ತರ್ ವಿರ್ಯ",
    treasurer: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
  },
  {
    id: "2016-17",
    year: "2016–17",
    president: "ಸತೀಶ್ ಕುಲಾಲ್",
    secretary: "ಮನೋಹರ ನೇರಂಬೋಳು",
    treasurer: "ಹರಿಪ್ರಸಾದ್ ಭಂಡಾರಿಬೆಟ್ಟು",
  },
  {
    id: "2017-18",
    year: "2017–18",
    president: "ಸತೀಶ್ ಕುಲಾಲ್",
    secretary: "ಹರಿಪ್ರಸಾದ್ ಭಂಡಾರಿಬೆಟ್ಟು",
    treasurer: "ಜಲಜಾಕ್ಷಿ/ನಾರಾಯಣ ಪರ್ನೆ",
  },
  {
    id: "2018-19",
    year: "2018–19",
    president: "ಡಿ. ಎಂ ಕುಲಾಲ್",
    secretary: "ಜಯಂತಿ ಗಂಗಾಧರ್",
    treasurer: "ನಾರಾಯಣ ಸಿ. ಪೆರ್ನೆ",
  },
  {
    id: "2019-20",
    year: "2019–20",
    president: "ಜಯಂತಿ ಗಂಗಾಧರ್",
    secretary: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
    treasurer: "ಸುಕುಮಾ‌ರ್ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2020-21",
    year: "2020–21",
    president: "ಜಯಂತಿ ಗಂಗಾಧರ್",
    secretary: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಸಂಚಯಗಿರಿ",
    treasurer: "ಸುಕುಮಾ‌ರ್ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2021-22",
    year: "2021–22",
    president: "ನಾರಾಯಣ ಸಿ. ಪೆರ್ನೆ",
    secretary: "ಲಕ್ಷಣ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್",
  },
  {
    id: "2022-23",
    year: "2022–23",
    president: "ನಾರಾಯಣ ಸಿ. ಪೆರ್ನೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆಹಿತ್ತು",
  },
  {
    id: "2023-24",
    year: "2023–24",
    president: "ರಾಧಾಕೃಷ್ಣ ಬಂಟ್ವಾಳ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾರ್ನಬೈಲು",
    treasurer: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಕೈಕುಂಜೆ",
  },
  {
    id: "2024-25",
    year: "2024–25",
    president: "ಕೃಷ್ಣಪ್ಪ ಬಂಗೇರ ಅಮ್ಮೂರು",
    secretary: "ಬಿ.ರಮೇಶ್ ಸಾಲ್ಯಾನ್ ಸಂಚಯಗಿರಿ",
    treasurer: "ಸೋಮನಾಥ ಸಾಲ್ಯಾನ್ ರಾಮನಗರ",
  },
  {
    id: "2025-26",
    year: "2025-26",
    president: "ರಮೇಶ್ ನಾಲಯಾನ್",
    secretary: "ಯಾದವ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
    treasurer: "ಯಾದವ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
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
              <th>Treasurer</th>
            </tr>
          </thead>
          <tbody>
            {PastMembersData.slice()
              .reverse()
              .map((data) => (
                <tr key={data.id}>
                  <td className="table-year">{data.year}</td>
                  <td>{data.president}</td>
                  <td>{data.secretary}</td>
                  <td>{data.treasurer}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastMembersList;
