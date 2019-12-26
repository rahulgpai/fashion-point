import React, { Fragment } from "react";
import "../../styles/directory/directory.scss";
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../reselect-selectors/directory/directory-selectors.js";

const Directory = ({ sections }) => (
  <Fragment>
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
