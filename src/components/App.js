import React, { Component } from 'react';
import { AppBar, CheckBox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

class App extends Component {
	state = {
		drawerActive: false,
		drawerPinned: false,
		sidebarPinned: false
	};

	toogleDrawerActive = () => {
		this.setState({
			drawerActive: !this.state.drawerActive
		});
	};

	toogleDrawerPinned = () => {
		this.setState({
			drawerPinned: !this.state.drawerPinned
		});
	};

	toogleSidebar = () => {
		this.setState({
			sidebarPinned: this.state.sidebarPinned
		});
	};

	render() {
		return (
			<Layout>
				<NavDrawer active={ this.state.drawerActive }
									 pinned={ this.state.drawerPinned }
									 permanentAt='xxxl'
									 onOverlayCick={ this.toogleDrawerActive }>
					<p>
						Navigation, account switcher, etc. go here.
					</p>
				</NavDrawer>
				<Panel>
					<AppBar title='React Toolbox' leftIcon='menu' onLeftIconClick={ this.toogleDrawerActive } />
					<div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
						<h1>Main Content</h1>
						<p>Main content goes here.</p>
						<CheckBox label='Pin drawer' checked={ this.state.drawerPinned } onChange={ this.toogleDrawerPinned } />
						<CheckBox label='Show sidebar' checked={ this.state.sidebarPinned } onChange={ this.toogleSidebar } />
					</div>
				</Panel>
				<Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
					<div><IconButton icon='close' onClick={ this.toogleSidebar }/></div>
					<div style={{ flex: 1 }}>
						<p>Supplemental content goes here.</p>
					</div>
				</Sidebar>
			</Layout>
		);
	}
}

module.exports = App;