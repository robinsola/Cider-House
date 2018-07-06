import React from 'react';
import AdminConfirmation from './AdminConfirmation';
import NewCiderForm from './NewCiderForm';

class NewCiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAdminConfirmation = this.handleAdminConfirmation.bind(this);
  }

  handleAdminConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let visibleContent = null;
    if (this.state.formVisibleOnPage) {
      visibleContent = <NewCiderForm />
    } else {
      visibleContent = <AdminConfirmation onAdminConfirmation={this.handleAdminConfirmation} />
    }
    return (
      <div>
        {visibleContent}
      </div>
    );
  }
}

export default NewCiderControl;
