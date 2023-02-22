import "./PodcastFilter.css"

const PodcastFilter = ({customText, elementFiltered, handle, ElementFilteredCount}) => {

  return (
    <div className='filterContainer'>
      
      <label className='constCountContainer'>{ElementFilteredCount}</label>
      <input className='filterStyle' value={elementFiltered} onChange={handle} placeholder={customText}/>
      
    </div> 
  )
}

export default PodcastFilter