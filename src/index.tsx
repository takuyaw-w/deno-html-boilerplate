export const title = "index";

export default (data) => {
  return (
    <>
      <h1 class="text-2xl">test</h1>
      <ul>
        {data.food.items.map((v) => (
          <li>
            {v.id}: {v.name}
          </li>
        ))}
      </ul>
      <p>This is my first post using lume. I hope you like it!</p>
    </>
  );
};
