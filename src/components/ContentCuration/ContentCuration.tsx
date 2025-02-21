import './ContentCuration.scss';

const data = [...Array(10)];

const ContentCuration = () => {
  return (
    <section className="curation">
      <h3 className="curation__title">콘텐츠 큐레이션 제목</h3>
      <ol className="curation__list">
        {data.map((_, index) => (
          <li key={index} className="curation__item">
            콘텐츠 순위 {index + 1}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ContentCuration;
