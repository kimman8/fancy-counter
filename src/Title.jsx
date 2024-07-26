function Title({ locked }) {
  return (
    <div>
      <h1 className="title">{locked ? 'limit reached' : 'fancy counter'}</h1>
    </div>
  );
}

export default Title;
