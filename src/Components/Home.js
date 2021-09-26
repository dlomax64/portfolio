import '../Styles/Home.css';
import Particles from 'react-particles-js';
import Wave from 'react-wavify';

const Home = () => {
  return (
    <div className="Home">
      <div id='intro'>
        <h1> 
          Hello, 
        </h1>
        <h2>
          I'm <em className='highlight'>Dylan Lomax</em>.
        </h2>
        <h3>
          A <em className='highlight'>Software Developer</em> and a senior Computer Science student at <br />The University of Tennessee.
        </h3>
      </div>
      <Particles id='particles'
        params={{
          "particles": {
                "number": {
                        "value": 80,
                        "density": {
                                  "enable": true,
                                  "value_area": 800
                                }
                      },
                "color": {
                        "value": "#ffffff"
                      },
                "shape": {
                        "type": "circle",
                        "stroke": {
                                  "width": 0,
                                  "color": "#000000"
                                },
                        "polygon": {
                                  "nb_sides": 5
                                },
                        "image": {
                                  "src": "img/github.svg",
                                  "width": 100,
                                  "height": 100
                                }
                      },
                "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                                  "enable": false,
                                  "speed": 1,
                                  "opacity_min": 0.1,
                                  "sync": false
                                }
                      },
                "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                                  "enable": false,
                                  "speed": 40,
                                  "size_min": 0.1,
                                  "sync": false
                                }
                      },
                "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#fcde67",
                        "opacity": 0.4,
                        "width": 1
                      },
                "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                                  "enable": false,
                                  "rotateX": 600,
                                  "rotateY": 1200
                                }
                      }
              },
              "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                            "onhover": {
                                      "enable": true,
                                      "mode": "grab"
                                    },
                            "onclick": {
                                      "enable": true,
                                      "mode": "repulse"
                                    },
                            "resize": true
                          },
                    "modes": {
                            "grab": {
                                      "distance": 200,
                                      "line_linked": {
                                                  "opacity": 1
                                                }
                                    },
                            "bubble": {
                                      "distance": 400,
                                      "size": 40,
                                      "duration": 2,
                                      "opacity": 8,
                                      "speed": 3
                                    },
                            "repulse": {
                                      "distance": 200,
                                      "duration": 0.4
                                    },
                            "push": {
                                      "particles_nb": 4
                                    },
                            "remove": {
                                      "particles_nb": 2
                                    }
                          }
                  },
              "retina_detect": true
        }}
      />
      <Wave id='wave'
        fill='#5bccf6'
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
    </div>
  )
}

export default Home;
