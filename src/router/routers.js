const modules = import.meta.globEager('./modules/**/*.js')

const routers = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key]
  let modList = []
  for (const moduleskey in mod) {
    modList = modList.concat(mod[moduleskey])
  }
  routers.push(...modList)
})

export { routers }
