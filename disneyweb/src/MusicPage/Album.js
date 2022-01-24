import React from "react";

const styles = {
  album: {
    margin: '0',
    padding: '0',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    height: '50px',
    width: '50px',
    backgroundColor: 'blue',
    // borderRadius: '25px'
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: '50%'
  }
}

function get_coords(radian_interval, radius) {
  return {
    x: Math.cos(radian_interval) * radius,
    y: Math.sin(radian_interval) * radius
  }
}

function Album(props) {
  let coord = get_coords(props.radian_interval, props.radius)

  return (
    <div style={{...styles.album, left: `${props.center.x + coord.x}px`, top: `${props.center.y - coord.y}px`}}>
      {/* <img alt='ok' src={this.props.pic} style={styles.image}/> */}
    </div>
  )
}

export default Album;