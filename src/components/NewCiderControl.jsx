import React from 'react';
import AdminConfirmation from './AdminConfirmation';
import NewCiderForm from './NewCiderForm';
import PropTypes from 'prop-types';

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
      visibleContent = <NewCiderForm onAddNewCider={this.props.onAddNewCider}/>;
    } else {
      visibleContent = <AdminConfirmation onAdminConfirmation={this.handleAdminConfirmation} />;
    }
    return (
      <div>
        {visibleContent}
      </div>
    );
  }
}

NewCiderControl.propTypes = {
  onAddNewCider: PropTypes.func
}

export default NewCiderControl;
