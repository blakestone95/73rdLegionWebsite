import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'util/paths';

class NavBar extends Component {
  render() {
    return (
      <div className="legion-navbar">
        <Link to={PATHS.Home.path} replace>
          {PATHS.Home.display}
        </Link>
        <Link to={PATHS.AnnouncementBoard.path} replace>
          {PATHS.AnnouncementBoard.display}
        </Link>
        <Link to={PATHS.EventsCalendar.path} replace>
          {PATHS.EventsCalendar.display}
        </Link>
        <Link to={PATHS.CreateEvent.path} replace>
          {PATHS.CreateEvent.display}
        </Link>
      </div>
    );
  }
}

export default NavBar;
