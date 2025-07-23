import { useEffect, useState } from "react";
import "./CommitteeMembers.scss";
import {
  CommitteeMembers,
  fetchCommitteesMembers,
} from "../../store/slices/committee-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/app-store";
import { fetchMahilaMandaliMembers } from "../../store/slices/mahila-mandali-slice";
import { fetchSevadalaMembers } from "../../store/slices/sevadala-slice";
import { CommitteeNames } from "../../utils/master-menu";
import Loading from "../../components/loading/Loading";

const CommitteeMembers = () => {
  const [committeeInfo, setCommitteeInfo] = useState<CommitteeMembers>({
    id: "",
    teamName: "",
    aboutTeam: "",
    members: [],
  });

  const dispatch = useDispatch<AppDispatch>();
  const { activeCommitteePage } = useSelector(
    (state: RootState) => state.uiControls
  );
  const { committees } = useSelector((state: RootState) => state.committee);
  const { sevadalaMembers } = useSelector((state: RootState) => state.sevadala);
  const { mahilaMandali } = useSelector(
    (state: RootState) => state.mahilaMandali
  );

  const loading = useSelector(
    (state: RootState) =>
      state.committee.loading ||
      state.sevadala.loading ||
      state.mahilaMandali.loading
  );

  const error = useSelector(
    (state: RootState) =>
      state.committee.error || state.sevadala.error || state.mahilaMandali.error
  );

  useEffect(() => {
    if (activeCommitteePage === CommitteeNames.KULALA_SUDHARAKA_SANGHA) {
      dispatch(fetchCommitteesMembers());
    } else if (activeCommitteePage === CommitteeNames.SEVADALA) {
      dispatch(fetchSevadalaMembers());
    } else if (activeCommitteePage === CommitteeNames.MAHILA_MANDALI) {
      dispatch(fetchMahilaMandaliMembers());
    }
  }, [dispatch, activeCommitteePage]);

  useEffect(() => {
    const dataMap = {
      [CommitteeNames.KULALA_SUDHARAKA_SANGHA]: committees,
      [CommitteeNames.SEVADALA]: sevadalaMembers,
      [CommitteeNames.MAHILA_MANDALI]: mahilaMandali,
    };

    const selectedData = dataMap[activeCommitteePage];
    if (selectedData && selectedData.length > 0) {
      setCommitteeInfo(selectedData[0]);
    }
  }, [committees, sevadalaMembers, mahilaMandali, activeCommitteePage]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="members-list">
      <div className="page-title">
        {committeeInfo.teamName}
        <span className="highlight"> Members</span>
      </div>
      <div className="about-team">
        <p>{committeeInfo.aboutTeam}</p>
      </div>
      <div className="members-list">
        {committeeInfo.members.map((member, index) => (
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
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><circle cx='80' cy='50' r='30' fill='%23ccc'/><path d='M40,130 C40,100 120,100 120,130 Z' fill='%23ccc'/></svg>";
                }}
              />
              {/* <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><circle cx='80' cy='50' r='30' fill='%23ccc'/><path d='M40,130 C40,100 120,100 120,130 Z' fill='%23ccc'/></svg>"
                alt={member.name}
                className="member-image"
                style={{ background: "#eee" }}
              /> */}
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
