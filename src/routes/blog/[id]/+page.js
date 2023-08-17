// fetchind Id of the each post from api endpoint

export const load = async ({ fetch, params: { id } }) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();

  return {
    post,
  };
};
