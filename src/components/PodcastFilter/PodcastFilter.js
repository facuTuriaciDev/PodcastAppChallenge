const PodcastFilter = ({customText, elementFiltered, handle, ElementFilteredCount}) => {

  const filterContainer = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    width: '100%',
    height: '125px',
  } 

  const filterStyle = {
    fontSize: '20px',
    border: '3px solid #E8E8E8',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    height: '20px',
    display: 'grid',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const constCountContainer = {
    backgroundColor: '#3175b2',
    borderRadius: '12px',
    padding: '10px',
    margin: '3px',
    width: '30px',
    height: '15px',
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',

  }

  return (
    <div style={filterContainer}>
      
      <label style={constCountContainer}>{ElementFilteredCount}</label>
      <input style={filterStyle} value={elementFiltered} onChange={handle} placeholder={customText}/>
      
    </div> 
  )
}

export default PodcastFilter