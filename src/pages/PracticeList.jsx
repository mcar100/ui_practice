import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GoBackButton from "../components/Button/GoBackButton";
import { PRACTICE_LIST } from "../utils/constants";

function PracticeListPage() {
  const { topic } = useParams();
  const [practiceTitle, setPracticeTitle] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [topicUrlList, setTopicUrlList] = useState([]);

  useEffect(() => {
    const newTopicInfo = PRACTICE_LIST.filter(
      (el) => el.title.toLocaleLowerCase() === topic
    )[0];

    setPracticeTitle(newTopicInfo.title);
    setTopicList(newTopicInfo.list);
    setTopicUrlList(newTopicInfo.url);
  }, [topic]);

  return (
    <div className="project-list-container">
      <GoBackButton />
      <h2>{practiceTitle}</h2>

      <ul className="project-list">
        {topicList.map((topic, idx) => (
          <li key={`practice-${idx}`}>
            <span>{topic}</span>
            {topicUrlList[idx] !== undefined ? (
              <Link to={topicUrlList[idx]}>Go</Link>
            ) : (
              <Link className="hidden-link"></Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeListPage;
