import React, { Component } from 'react';

import Header from 'comp/heads';

import RouterView from 'router';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Header />
			<main className="main">
				<RouterView></RouterView>
			</main>
        </div>
        );
    }
}

export default App;
