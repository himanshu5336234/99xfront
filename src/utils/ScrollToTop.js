import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location) {
			if(this.props.location.pathname != "/p/terms")
			window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

			let x = document.querySelectorAll("ul.mega-menu")
			x.forEach(e=>{
				e.style.display = ''
			})

			let userMenu = document.querySelector(".profile_submenu");
			if(userMenu) userMenu.style.display = ""

		}
	}

	render() {
		return <React.Fragment />
	}
}

export default withRouter(ScrollToTop)
