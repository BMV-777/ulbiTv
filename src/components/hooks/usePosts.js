import { useMemo } from "react";

export const useSortedPosts = (sort, posts) => {
  const sortedPosts = useMemo(() => {
    console.log("Отработала Функция!!");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (sort, query, posts) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
