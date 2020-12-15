function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const mock = Array(60)
  .fill(null)
  .map((_) => ({
    date: window
      .moment(randomDate(new Date(2019, 0, 1), new Date()))
      .format("DD.MM.YY"),
    profit: getRandomArbitrary(-500, 500),
    id: Math.random(),
  }));

export default mock;
