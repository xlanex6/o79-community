export default ( {app: {head}}, inject) => {
  head.script.push({
    src:"https://personal-analytics-three.vercel.app/umami.js",
    async: true,
    defer: true,
    'data-website-id': "d6063f4d-de52-40d2-8fb9-ca888499c18e"
  })
}
