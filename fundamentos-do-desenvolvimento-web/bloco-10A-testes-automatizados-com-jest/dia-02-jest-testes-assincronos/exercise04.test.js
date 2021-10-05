const { getRepos } = require('./exercise04');

describe('test if getRepos get the repositories on URL', () => {
  it('test if return of function contains sd-01-week4-5-project-todo-list', () => (
    getRepos('https://api.github.com/orgs/tryber/repos').then((data) => {
      expect(data.some((repo) => repo === 'sd-01-week4-5-project-todo-list')).toBeTruthy();
    })
  ))

  it('test if return of function contains sd-01-week4-5-project-todo-list', () => (
    getRepos('https://api.github.com/orgs/tryber/repos').then((data) => {
      expect(data.some((repo) => repo === 'sd-01-week4-5-project-meme-generator')).toBeTruthy();
    })
  ))
})
