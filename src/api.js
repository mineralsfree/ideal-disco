export const getUser = (username) => {
  return fetch(` https://api.github.com/users/${username}`).then((result) => result.json());
}
export const getRepos = (username, page) => {
  return fetch(`https://api.github.com/users/${username}/repos?per_page=4&page=${page}`).then((result) => result.json())
}