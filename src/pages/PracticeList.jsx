import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PRACTICE_LIST } from "../utils/constants";

function PracticeListPage() {
  const mainTopic = useParams().topic;
  const [practiceTitle, setPracticeTitle] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [topicUrlList, setTopicUrlList] = useState([]);

  useEffect(() => {
    const newTopicInfo = PRACTICE_LIST.filter(
      (el) => el.title.toLocaleLowerCase() === mainTopic
    )[0];

    setPracticeTitle(newTopicInfo.title);
    setTopicList(newTopicInfo.list);
    setTopicUrlList(newTopicInfo.url);
  }, [mainTopic]);

  return (
    <div className="project-list-container">
      <h2>{practiceTitle}</h2>
      <ul className="project-list">
        {topicList.map((topic, idx) => (
          <li key={`practice-${idx}`}>
            <span>{topic}</span>
            <Link to={topicUrlList[idx]}>Go</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeListPage;
