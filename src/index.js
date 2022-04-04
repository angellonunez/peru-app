import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
        <div className="app">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);