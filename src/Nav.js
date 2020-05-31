import React from "react";
class Nav extends React.Component {
  render() {
    let nav = this.props.nav;
    return (
      <div className="header-nav">
        <div className="container-main">
          <nav className="nav">
            <div className="nav-list">
              <div className="nav-item">
                <a className="nav-link" href="/">
                  Stars
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/List">
                  Список предложений
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;
