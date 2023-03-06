// const white = ['/home', '/login/login', '/login/register', '/position']
export const setupBeforeEach = (router) => {
  router.beforeEach(async (to, from, next) => {
    next()
  })
}

export const setupAfterEach = (router) => {
  router.afterEach(async () => {
    window.scrollTo(0, 0)
  })
}

export const setupEach = (router) => {
  setupBeforeEach(router)
  setupAfterEach(router)
}
