function Slider(){
    return(
        <div className='container slider' style={{
            border:'2px solid green',
            borderRadius:'10px'
        }}>
      <div id="carouselExampleAutoplaying" className="carousel slide m-3" data-bs-ride="carousel">
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <img src={require('../assets/1x/Asset 1.png')} className="d-block w-100 logo" height='400px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../assets/1x/Asset 1.png')} className="d-block w-100 logo" height='400px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../assets/1x/Asset 1.png')} className="d-block w-100 logo" height='400px' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

















      

    );
}
export default Slider;