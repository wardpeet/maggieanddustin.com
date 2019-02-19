import SmoothScroll from 'smooth-scroll'

let scrolls = []

export const onRouteUpdate = () => {
  const instance = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  })

  scrolls.push(instance)
}

export const onPreRouteUpdate = () => {
  scrolls.splice(0).forEach(instance => instance.destroy())
}
