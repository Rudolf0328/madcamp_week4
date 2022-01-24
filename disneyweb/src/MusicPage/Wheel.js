import { Component } from "react";
import Album from "./Album";

const styles = {
  wheel: {
    margin: '0',
    pdding: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100px',
    width: '100px',
    backgroundColor: 'red',
    borderRadius: '50px'
  }
}

class Wheel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      radius: 150,
      albums: [],
      theta: 0.0,
      snap_point: { x: null, y: null },
      snap_in_progress: false,
      children_loaded: 0,
      loaded: false
    }
    this.temp_theta = 0.0
    this.anim_id = null
  }

  children_loaded = () => {
    this.setState(prevstate => {
      return {
        children_loaded: prevstate.children_loaded + 1
      }
    }, () => {
      if (this.state.children_loaded === 0) {
        this.setState({
          loaded: true,
          snap_point: {
            x: this.wheel.children[2].getBoundingClientRect().x + (this.wheel.children[2].getBoundingClientRect().width / 2),
            y: this.wheel.children[2].getBoundingClientRect().y + (this.wheel.children[2].getBoundingClientRect().height / 2),
          }
        })
      }
    })
  }
  
  snap_back = () => {
    let center_of_wheel = {
      x: this.wheel.getBoundingClientRect().x + (this.wheel.getBoundingClientRect().width / 2),
      y: this.wheel.getBoundingClientRect().y + (this.wheel.getBoundingClientRect().height / 2),
    }
    let snap_point_theta = Math.atan2(Math.abs(this.state.snap_point.y - center_of_wheel.y), Math.abs(this.state.snap_point.x - center_of_wheel.x))
    snap_point_theta = snap_point_theta * (180 / Math.PI)

    let shortest_distance = Math.pow(((this.wheel.children[3].getBoundingClientRect.x + 100) - this.state.snap_point.x), 2) + Math.pow(((this.wheel.children[3].getBoundingClientRect().y + 100) - this.state.snap_point.y), 2)
    shortest_distance = Math.sqrt(shortest_distance)

    let closest_album = null

    for (let i = 0; i < this.wheel.children.length; i++) {
      let dx = (this.wheel.children[i].getBoundingClientRect().x + 100) - this.state.snap_point.x;
      let dy = (this.wheel.children[i].getBoundingClientRect().y + 100) - this.state.snap_point.y;
      let current_distance = Math.pow(dx, 2) + Math.pow(dy * 2)

      if(shortest_distance >= current_distance) {
        shortest_distance = current_distance;
        closest_album = this.wheel.children[i];
      }
    }

    // find angle between snap_point's theta and closest_album's theta
    let closest_albums_x = closest_album.getBoundingClientRect().x + (closest_album.getBoundingClientRect().width / 2);
    let closest_albums_y = closest_album.getBoundingClientRect().y + (closest_album.getBoundingClientRect().height / 2);

    let closest_albums_theta = Math.atan2(Math.abs(closest_albums_y - center_of_wheel.y), Math.abs(closest_albums_x - center_of_wheel.x));
    closest_albums_theta = closest_albums_theta * (180 / Math.PI);

    let theta_between = Math.abs(closest_albums_theta - snap_point_theta);

    // decide whether to make a positive or negative degree shift
    if (closest_albums_x > center_of_wheel.x && closest_albums_y <= center_of_wheel.y) { // QI
        theta_between = closest_albums_theta > snap_point_theta ? theta_between : -1.0 * theta_between;
    } else if (closest_albums_x <= center_of_wheel.x && closest_albums_y <= center_of_wheel.y) { // QII
        theta_between = closest_albums_theta > snap_point_theta ? -1.0 * theta_between : theta_between;
    } else if (closest_albums_x <= center_of_wheel.x && closest_albums_y > center_of_wheel.y) { // QIII
        theta_between = closest_albums_theta > snap_point_theta ? theta_between : -1.0 * theta_between;
    } else if (closest_albums_x > center_of_wheel.x && closest_albums_y >= center_of_wheel.y) { // QIV
        theta_between = closest_albums_theta > snap_point_theta ? -1.0 * theta_between : theta_between;
    }

    // rotate wheel towards snap point
    this.wheel.style.transitionDelay = '0.1s';
    this.wheel.style.transitionDuration = '1.0s';
    this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.state.theta + theta_between}deg)`;

    // rotate the albums in the opposite direction of the wheel to maintain equilibrium
    for (let i = 0; i < this.wheel.children.length; i++) {
        this.wheel.children[i].style.transitionDelay = '0.1s';
        this.wheel.children[i].style.transitionDuration = '1.0s';

        if (closest_album === this.wheel.children[i]) {
            this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1.0 * (this.state.theta + theta_between)}deg) scale(1.0)`;
            this.wheel.children[i].style.zIndex = 100;
        } else {
            this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1.0 * (this.state.theta + theta_between)}deg) scale(0.5)`;
            this.wheel.children[i].style.zIndex = 1;
        }
    }

    setTimeout(() => {
        this.setState(prevState => {
            return {
                snap_in_progress: false,
                theta: prevState.theta + theta_between
            }
        });
    }, 200);
  }

  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2,
      y: parseFloat(this.wheel.style.height) / 2
    }

    let temp_albums = []

    for (let i = 0; i < 8; i++) {
      temp_albums.push(
        <Album radius={this.state.radius} radian_interval={(Math.PI / 4) * i} center={center_of_wheel} key={`album_${i}`} pic={`https://picsum.photos/500/500`}/>
      )
    }

    this.setState({ albums: temp_albums })
  }

  handle_scroll = event => {
    if(this.state.snap_in_progress && !this.state.loaded) {
      return;
    } else {
      clearTimeout(this.anim_id)
      // let scroll_speed = (event.deltaY / 360) * 20 
      this.wheel.style.transitionDelay = '0.0s'
      this.wheel.style.transitionDuration = '0.0s'
      this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta + (event.deltaY * 0.5)}deg)`
      this.temp_theta += (event.deltaY * 0.5)

      for (let i = 0; i < this.wheel.children.length; i++) {
        this.wheel.children[i].style.transitionDelay = '0.0s'
        this.wheel.children[i].style.transitionDuration = '0.0s'
        this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1.0 * this.temp_theta}deg)`
      }

      this.anim_id = setTimeout(() => {
        this.setState({ theta: this.temp_theta})
      }, 150)
    }
  }

  render() {
    return (
      <div onWheel={this.handle_scroll} ref={ref_id => this.wheel = ref_id} style={styles.wheel}>
        {this.state.albums}
      </div>
    )
  }
}

export default Wheel;