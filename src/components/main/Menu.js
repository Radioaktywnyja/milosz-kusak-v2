import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div id="menu-gora">
        <ul>
          <li className={this.props.location.pathname === '/' ? 'active' : null}><Link to="/"><span>Karta Postaci</span></Link></li>
          <li className={this.props.location.pathname === '/umiejetnosci' ? 'active' : null}><Link to="/umiejetnosci"><span>Umiejętności</span></Link></li>
          <li className={this.props.location.pathname === '/zadania' ? 'active' : null}><Link to="/zadania"><span>Dziennik zadań</span></Link></li>
          <li className={this.props.location.pathname === '/historia' ? 'active' : null}><Link to="/historia"><span>Historia Postaci</span></Link></li>
          <li className={this.props.location.pathname === '/kontakt' ? 'active' : null}><Link to="/kontakt"><span>Kontakt</span></Link></li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Menu);
