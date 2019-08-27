const { TweenMax, TimelineMax, Back } = require('gsap/all')

class Slider {
  animateProgressBar (index) {
    const progressBar = document.querySelectorAll('.slider-progress')
    const nextIndex = index < 2 ? index + 1 : 0

    return TweenMax.to({}, 8, {
      force3D: true,
      onUpdateParams: ['{self}'],
      onUpdate (timeline) {
        TweenMax.set(progressBar, {
          scaleX: timeline.progress(),
          transformOrigin: '0px 0px'
        })
      },
      onComplete: () => this.sliderIn(nextIndex)
    })
  }

  slider (index = 0) {
    const sliderItems = document.querySelectorAll('.slider-item')
    const item = sliderItems[index]
    const text = item.querySelectorAll('h2')
    const bar01 = item.querySelectorAll('.bar01')
    const bar02 = item.querySelectorAll('.bar02')
    const bar03 = item.querySelectorAll('.bar03')
    const navItem = document.querySelectorAll(`.nav-item-${index}`)
    const timeline = new TimelineMax()

    TweenMax.set(item, { opacity: 0 })
    TweenMax.set(navItem, { opacity: 1 })

    timeline
      .to(item, 0.7, { opacity: 1 }, 0)
      .staggerFrom(text, 0.5, { y: 50, autoAlpha: 0, ease: Back.easeOut }, 0.1)
      .staggerFrom(bar01, 0.3, { y: 20, autoAlpha: 0, ease: Back.easeOut }, 0.2)
      .staggerFrom(bar02, 0.4, { y: 20, autoAlpha: 0, ease: Back.easeOut }, 0.3)
      .staggerFrom(bar03, 0.5, { y: 20, autoAlpha: 0, ease: Back.easeOut }, 0.4)
  }

  sliderIn (index) {
    const sliderItems = document.querySelectorAll('.slider-item')
    const sliderNav = document.querySelectorAll('.slider-nav a')

    sliderItems.forEach((item, k) => TweenMax.set(item, { opacity: 0 }))
    sliderNav.forEach((item, k) => TweenMax.set(item, { opacity: 0.7 }))

    this.slider(index)
    this.animateProgressBar(index).restart()
  }
}

window.slider = new Slider()
