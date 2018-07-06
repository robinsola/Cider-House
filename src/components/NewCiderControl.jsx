import React from 'react';

class NewCiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    return (
      <div>
        <p>New Cider Control Page!</p>
      </div>
    );
  }
}

export default NewCiderControl;
