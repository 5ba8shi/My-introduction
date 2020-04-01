import React from 'react';
class Works extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickWorks() {
    this.setState({isModalOpen: true});
  }
  
  handleClickClose(){
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <div class="modal-introduction__inside">
              <a href={this.props.url}><img src={this.props.image} width="500px" border="solid" /></a>
              <div>
              <h4>{this.props.title}</h4>
              <h5>使用言語：{this.props.language}</h5>
              <p>{this.props.introduction}</p>
              </div>
              </div>
            </div>
            <button
              className='modal-close-btn'
              onClick={()=>{this.handleClickClose()}}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

  
    return(
      <div class="portfolio__list__items">
      <div class="portfolio__list__items__item" 
      onClick={()=>{this.handleClickWorks()}}
      >
        <img class="portfolio__list__items__item__img" src={this.props.image}/>
        <div class="portfolio__list__items__item__name">{this.props.name}</div>
      </div>
      {modal}
    </div>
    );
  }
}
export default Works;