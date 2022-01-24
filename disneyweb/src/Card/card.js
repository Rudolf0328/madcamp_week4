import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { useScroll } from 'react-use-gesture'

import './cardstyle.css'
  
const cards = [
"https://upload.wikimedia.org/wikipedia/en/5/5e/Elsa_from_Disney%27s_Frozen.png",
"https://w.namu.la/s/193611c383f1c9629d6212dd7c656b8d46694986bf85d4528a5567de0c9534b1a9775973bb235c90d168d130798d01181ddf7cca2bbbef3cf17661479f3615a303ff27c19079ee3302c5bbde7f6e9cb5",
  'https://ww.namu.la/s/5273b78fb1e7bdba05847dccbedea5942c328cad92456f4a7d2cd23b310380990de6534befd85213791921d8c58142056c67c69e3ab655331953391a24eeaa38de591524798896a92b22c274cf3c0b3f23af19e078220fd159503de9bc7b215d',
  'https://ww.namu.la/s/3923c13344d1895673b7e6d937b348ab5193680b7de0722dd14ffc670fcebe910ad6e538ae9f54d88e72235c61d99479b15eab2aa32ae1e03bb23fb1de004ca551b178140cfbfa13b96ffa6e6aee8206',
  'https://w.namu.la/s/6c15ded60ac27d717a362ffa5b0f9208b33e5a6126f6d1609693b934e757a098cedabe90c8f9520001d2dd39187d1d2524a31a00db392f463e99aec78122aa0abfd18057de6ea336d8481fb7442b7e6451e2acf740e899f35776f104b1d4b75d',
  'https://t1.daumcdn.net/news/202105/21/dispatch_cv/20210521134838613sxjd.jpg'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Card() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set((i) => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <div className='lroot'>
      <div className = "dd">
    <animated.div key={i} style={{ x, y }}>
    
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
      
    </animated.div>
    
    </div>
    </div>
    
 
  ))
}



export default Card
