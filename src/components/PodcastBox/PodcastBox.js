const PodcastBox = ({ podcast }) => {

  const podcastImage = {
    borderRadius: '50%',
    position: "absolute",
    top: "-75px",
  };

  const podcastDiv = {
    position: 'relative',
    border : '3px solid #F1F1F1',
    boxShadow: '0px 5px 5px 0px #E2E2E2',
    borderRadius: '3px',
    margin: '50px',
    padding: '10px',
    paddingTop: '50px',
    width: '400px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    fontSize: '1.1rem'
  }

  return (
  <div style={podcastDiv} key={podcast.id.attributes['im:id']} onClick={() => {console.log(podcast["im:name"].label);}}> 
    <img style={podcastImage} src={podcast["im:image"][2].label} alt="flag" width="200" height="200"/>
    <p>{podcast["im:name"].label}</p>
    <label>Author: {podcast["im:artist"].label}</label>
  </div>
  )
}

export default PodcastBox
