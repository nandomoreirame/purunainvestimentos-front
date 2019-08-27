// import locomotiveScroll from 'locomotive-scroll'

// export default ({ app }) => {
//   const __DOC__ = document.documentElement
//   const scroll = new locomotiveScroll({ // eslint-disable-line
//     el: document.querySelector('#o-scroll'),
//     smooth: true,
//     getSpeed: true,
//     getDirection: true
//   })

//   __DOC__.classList.add('is-loaded')
//   __DOC__.classList.remove('is-loading')

//   window.onNuxtReady(setTimeout(() => __DOC__.classList.add('is-ready'), 300))

//   app.router.afterEach(() => {
//     scroll.destroy()
//     window.onNuxtReady(setTimeout(() => scroll.init(), 300))

//     scroll.on('scroll', instance =>
//       __DOC__.setAttribute('data-direction', instance.direction))
//   })
// }
