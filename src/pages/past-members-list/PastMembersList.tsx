import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PastMembersList.scss";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const PastMembersData = [
  {
    id: "005–06",
    year: "2005–06",
    president: "ರಮೇಶ್ ಸಾಲಿಯಾನ್ ಕ್ರೆಂಜ",
    secretary: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆತ್ತೆ",
  },
  {
    id: "2006-07",
    year: "2006–07",
    president: "ನಾಗೇಶ್ ಬಾಳೆತ್ತೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2007-08",
    year: "2007–08",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕ್ರೆಂಜ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2008-09",
    year: "2008–09",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕ್ರೆಂಜ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2009-10",
    year: "2009–10",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕ್ರೆಂಜ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2010-11",
    year: "2010–11",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕ್ರೆಂಜ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2011-12",
    year: "2011–12",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕ್ರೆಂಜ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಸಾತ್ಯನಾರಾಯಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2012-13",
    year: "2012–13",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕ್ರೆಂಜ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಸಾತ್ಯನಾರಾಯಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2013-14",
    year: "2013–14",
    president: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
    secretary: "ಎಚ್. ಆರ್. ಪಿ.",
    treasurer: "ಸಾತ್ಯನಾರಾಯಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2014-15",
    year: "2014–15",
    president: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಎಂ.ಡಿ.",
    treasurer: "ಸಾತ್ಯನಾರಾಯಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2015-16",
    year: "2015–16",
    president: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಎಂ.ಡಿ.",
    treasurer: "ಸಾತ್ಯನಾರಾಯಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2016-17",
    year: "2016–17",
    president: "ಸತೀಶ್ ಕುಲಾಲ್",
    secretary: "ನಾರಾಯಣ ನಂದಲಿಕೆ",
    treasurer: "ಸಾತ್ಯನಾರಾಯಣ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2017-18",
    year: "2017–18",
    president: "ಸತೀಶ್ ಕುಲಾಲ್",
    secretary: "ಹರಿದಾಸ್ ಭಂಡಾರಿಬೆಟ್ಟು",
    treasurer: "ಸುಬ್ರಹ್ಮಣ್ಯ / ನಾರಾಯಣ ಶೆಣೈ",
  },
  {
    id: "2018-19",
    year: "2018–19",
    president: "ಎ. ಬಿ. ಶೆಣೈ",
    secretary: "ಜಯಂತ್ ಗಂಗಾಧರ್",
    treasurer: "ಎಂ. ಜೆ. ಶೆಣೈ",
  },
  {
    id: "2019-20",
    year: "2019–20",
    president: "ಜಯಂತ್ ಗಂಗಾಧರ್",
    secretary: "ರಮೇಶ್ ಸಾಲಿಯಾನ್",
    treasurer: "ಸುಧಾಕರ್ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2020-21",
    year: "2020–21",
    president: "ಜಯಂತ್ ಗಂಗಾಧರ್",
    secretary: "ರಮೇಶ್ ಸಾಲಿಯಾನ್",
    treasurer: "ಸುಧಾಕರ್ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2021-22",
    year: "2021–22",
    president: "ನಾರಾಯಣ ಸಿ. ಪೈಸೆ",
    secretary: "ಲಕ್ಷ್ಮನ್ ಕುಲಾಲ್",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್",
  },
  {
    id: "2022-23",
    year: "2022–23",
    president: "ನಾರಾಯಣ ಸಿ. ಪೈಸೆ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಸುತಾರಾಮ್ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2023-24",
    year: "2023–24",
    president: "ವೃದ್ದಾಪ್ಯ ಬಂಟ್ವಾಳ",
    secretary: "ಕೇಶವ ಮಾಸ್ತರ್ ಮಾನಜ್ಜಿ",
    treasurer: "ಸುತಾರಾಮ್ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2024-25",
    year: "2024–25",
    president: "ನವದೀಪ್ ಬಂಗೇರ ಮೋಹನ",
    secretary: "ಬಿ.ಎಂ. ಶರತ್ ಕುಮಾರ",
    treasurer: "",
  },
  {
    id: "1980-81",
    year: "1980–81",
    president: "ಜಾನಪದ ಕುಲಾಲ ಮುಕ್ಕಾಮಲೆ",
    secretary: "ಚಂದ್ರಶೇಖರ",
    treasurer: "ಎಂ. ಭೋಜರಾಜ್",
  },
  {
    id: "1981-82",
    year: "1981–82",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಆನಂದ್ ಮ್ಯಾನಪ್ಪಾಡೆ",
    treasurer: "ಸೈಲರ್ಸ್",
  },
  {
    id: "1982-83",
    year: "1982–83",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಚಂದ್ರಶೇಖರ",
    treasurer: "ಗೋವಿಂದ ಬ. ಸಾಲಿಯಾನ್",
  },
  {
    id: "1983-84",
    year: "1983–84",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಚಂದ್ರಶೇಖರ",
    treasurer: "ಗೋವಿಂದ ಬ. ಸಾಲಿಯಾನ್",
  },
  {
    id: "1984-85",
    year: "1984–85",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಡೊಂಬಯ್ಯ",
    treasurer: "ಭೋಜರಾಜ್ ಬ.",
  },
  {
    id: "1985-86",
    year: "1985–86",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಭೋಜರಾಜ್ ಬ.",
    treasurer: "ಚಂದ್ರಶೇಖರ",
  },
  {
    id: "1986-87",
    year: "1986–87",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಜಯರಾಮ ಬಿ.",
    treasurer: "ಚಂದ್ರಶೇಖರ",
  },
  {
    id: "1987-88",
    year: "1987–88",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಜಯರಾಮ ಬಿ.",
    treasurer: "ಚಂದ್ರಶೇಖರ",
  },
  {
    id: "1988-89",
    year: "1988–89",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಜಯರಾಮ ಬಿ.",
    treasurer: "ಚಂದ್ರಶೇಖರ",
  },
  {
    id: "1989-90",
    year: "1989–90",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಡೊಂಬಯ್ಯ ಎಂ.",
    treasurer: "ಸುಬ್ರಹ್ಮಣ್ಯ",
  },
  {
    id: "1990-91",
    year: "1990–91",
    president: "ಹೋವನಯ್ಯ, ಮೂಡ್ಲ",
    secretary: "ಡೊಂಬಯ್ಯ ಎಂ.",
    treasurer: "ಸುಬ್ರಹ್ಮಣ್ಯ",
  },
  {
    id: "1991-92",
    year: "1991–92",
    president: "ಎಂ. ಎಂ. ಕುಲಾಲ್",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಜನಾರ್ದನ ಪೊಸೊಳ್ಳಿ",
  },
  {
    id: "1992-93",
    year: "1992–93",
    president: "ನ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಎಸ್. ಎಂ. ರಘುರಾಮ",
  },
  {
    id: "1993-94",
    year: "1993–94",
    president: "ನ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಎಸ್. ಎಂ. ರಘುರಾಮ",
  },
  {
    id: "1994-95",
    year: "1994–95",
    president: "ನ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಎಸ್. ಎಂ. ರಘುರಾಮ",
  },
  {
    id: "1995-96",
    year: "1995–96",
    president: "ನ. ಸಂಜೀವ",
    secretary: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    treasurer: "ಎಸ್. ಎಂ. ರಘುರಾಮ",
  },
  {
    id: "1996-97",
    year: "1996–97",
    president: "ಸಾಯಾನಂದ್ ಸಾಲಿಯಾನ್",
    secretary: "ಸದಾನಂದ ಬಂಗೇರ",
    treasurer: "ಶ್ರೀನಿವಾಸ ಪೈಪದ",
  },
  {
    id: "1997-98",
    year: "1997–98",
    president: "ಸಾಯಾನಂದ್ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಡಿ. ಎಂ. ಕುಮಾರ್",
  },
  {
    id: "1998-99",
    year: "1998–99",
    president: "ಸಾಯಾನಂದ್ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಡಿ. ಎಂ. ಕುಮಾರ್",
  },
  {
    id: "1999-20",
    year: "1999–2000",
    president: "ಸಾಯಾನಂದ್ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಡಿ. ಎಂ. ಕುಮಾರ್",
  },
  {
    id: "2000-01",
    year: "2000–01",
    president: "ಸಾಯಾನಂದ್ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಡಿ. ಎಂ. ಕುಮಾರ್",
  },
  {
    id: "2001-02",
    year: "2001–02",
    president: "ರಾಮ್ ವಚೇದ್ರ/ಸುದರ್ಶನ",
    secretary: "ಲಕ್ಷ್ಮಣ ಕುಲಾಲ್ ಅಗ್ನೇಶಲು",
    treasurer: "ವೃದ್ದಾಪ್ಯ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2002-03",
    year: "2002–03",
    president: "ಬಿ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ರಾಜೇಂದ್ರ ಮಾಸ್ತರ್",
  },
  {
    id: "2003-04",
    year: "2003–04",
    president: "ಸಾಯಾನಂದ್ ಸಾಲಿಯಾನ್",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ರಾಜೇಂದ್ರ ಮಾಸ್ತರ್",
  },
  {
    id: "2004-05",
    year: "2004–05",
    president: "ಸದಾನಂದ ಬಂಗೇರ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಜಯಂತ್ ಟಿಕೆರ್",
  },

  {
    id: "2005-06",
    year: "2005-06",
    president: "ರಮೇಶ್ ನಾಲಯಾನ್ ಕೇಕುಂಜೆ",
    secretary: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆತ್ತಟ್ಟು",
  },
  {
    id: "2006-07",
    year: "2006-07",
    president: "ನಾಗೇಶ್ ಬಾಳೆತ್ತಟ್ಟು",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2007-08",
    year: "2007-08",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೇಕುಂಜೆ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2008-09",
    year: "2008-09",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೇಕುಂಜೆ",
    secretary: "ಸತೀಶ್ ಕುಲಾಲ್",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2009-10",
    year: "2009-10",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೇಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
  },
  {
    id: "2010-11",
    year: "2010-11",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೇಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆತ್ತಟ್ಟು",
  },
  {
    id: "2011-12",
    year: "2011-12",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೇಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆತ್ತಟ್ಟು",
  },
  {
    id: "2012-13",
    year: "2012-13",
    president: "ಎ. ಲಿಂಗಪ್ಪ ಮಾಸ್ತರ್ ಕೇಕುಂಜೆ",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್",
  },
  {
    id: "2013-14",
    year: "2013-14",
    president: "ಯಂ. ಲತೀಫ್ ಕುಮಾರ್",
    secretary: "ಹರ್ಷ ಕುಮಾರ್ ಪಿ.",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್ / ಸಂತೋಷ್",
  },
  {
    id: "2014-15",
    year: "2014-15",
    president: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    secretary: "ಸತೀಶ್ ಕುಮಾರ್ ಎನ್",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್ / ಸಂತೋಷ್",
  },
  {
    id: "2015-16",
    year: "2015-16",
    president: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    secretary: "ಸತೀಶ್ ಕುಮಾರ್ ಎನ್",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್ / ಸಂತೋಷ್",
  },
  {
    id: "2016-17",
    year: "2016-17",
    president: "ಸತೀಶ್ ಕುಲಾಲ್",
    secretary: "ನಂದಕುಮಾರ್ ನರಸಿಂಹಯ್ಯ",
    treasurer: "ವಸುಪ್ರದ ವಾಸುದೇವ",
  },
  {
    id: "2017-18",
    year: "2017-18",
    president: "ಸತೀಶ್ ಕುಲಾಲ್",
    secretary: "ಹರ್ಷದೀಪ್ ಭಟ್ ಬೊಳಂತಟ್ಟು",
    treasurer: "ವಸುಪ್ರದ / ಗೋಪಾಲಕೃಷ್ಣ ಪಿ. ನಾವೂಡ",
  },
  {
    id: "2018-19",
    year: "2018-19",
    president: "ಎಂ. ಟಿ. ಕುಲಾಲ್",
    secretary: "ಜಯಂತಿ ಗಂಗಾಧರ್",
    treasurer: "ಹರ್ಷದೀಪ್ ಭಟ್",
  },
  {
    id: "2019-20",
    year: "2019-20",
    president: "ಜಯಂತಿ ಗಂಗಾಧರ್",
    secretary: "ರಮೇಶ್ ನಾಲಯಾನ್ (ಸಂಯೋಜಕಿ)",
    treasurer: "ಸುಕುಮಾರ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2020-21",
    year: "2020-21",
    president: "ಜಯಂತಿ ಗಂಗಾಧರ್",
    secretary: "ರಮೇಶ್ ನಾಲಯಾನ್ (ಸಂಯೋಜಕಿ)",
    treasurer: "ಸುಕುಮಾರ ಬಂಟ್ವಾಳ",
  },
  {
    id: "2021-22",
    year: "2021-22",
    president: "ನಾರಾಯಣ ಪಿ. ನಾಯಕ್",
    secretary: "ಲಕ್ಷ್ಮಿ ಕುಮಾರ್ ಅಗ್ನೇಶಿ",
    treasurer: "ಸತೀಶ್ ಕುಲಾಲ್",
  },
  {
    id: "2022-23",
    year: "2022-23",
    president: "ನಾರಾಯಣ ಪಿ. ನಾಯಕ್",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ನಾಗೇಶ್ ಬಾಳೆತ್ತಟ್ಟು",
  },
  {
    id: "2023-24",
    year: "2023-24",
    president: "ಸುದಾಕ್ಷಿಣಿ ಬಂಟ್ವಾಳ",
    secretary: "ಕೇಶವ ಮಾದೇವ ಮಣಿಬೆಜ್ಜೆ",
    treasurer: "ರಮೇಶ್ ನಾಲಯಾನ್",
  },
  {
    id: "2024-25",
    year: "2024-25",
    president: "ಸುಪ್ರಭ ಬಂಗೇರ ಅಜ್ಜಿವರ",
    secretary: "ಬಿ. ಜಯಂತ್ ಗಂಗಾಧರ್ (ಸಂಯೋಜಕಿ)",
    treasurer: "ಯಾದವ ಕುಲಾಲ್ ಅಗ್ರಬೈಲು",
  },
  {
    id: "2025-26",
    year: "2024-25",
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
              <th>Secretary</th>
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
