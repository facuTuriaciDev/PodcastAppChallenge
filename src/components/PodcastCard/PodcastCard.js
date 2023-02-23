import './PodcastCard.css';

const PodcastCard = ({ podcast }) => {

  return (
    <div className={'card'}>
      <img className={'cardImg'} src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />

      <hr className={'divider'}></hr>

      <div className={'title'}> 
        <h3>{podcast['im:name'].label}</h3>
        <label>{`by ${podcast['im:artist'].label}`}</label>
      </div>
      
      <hr className={'divider'}></hr>

      <div className='description'>
        <h4>{'Description: '}</h4>
        <label>{podcast.summary.label}</label>
      </div>
      
    </div>
  );
};

export default PodcastCard
