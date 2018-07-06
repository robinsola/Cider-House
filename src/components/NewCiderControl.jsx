import React from 'react';

class NewCiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render() {
    return (
      <div>
        <p onClick={this.handleClick}>Click to change state</p>
      </div>
    );
  }
}

export default NewCiderControl;
