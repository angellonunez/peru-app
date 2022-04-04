import React, { useRef } from 'react';
import Modal from './Modal';

export default function Main() {
    const animals = useRef(null);
    return (
        <main>
            <div className="buttons">
                <div className="button" onClick={() => animals.current.open()}>
                    <img src={require("./img/002-llama.svg").default} alt="Animal" />
                    <p className="button-text">Animals</p>
                </div>
                <Modal ref={animals}>
                    <h1>Hello</h1>
                </Modal>
                <div className="button">
                    <img src={require("./img/009-antara.svg").default} alt="Music" />
                    <p className="button-text">Music</p>
                </div>
                <div className="button">
                    <img src={require("./img/013-causa limeña.svg").default} alt="Food" />
                    <p className="button-text">Food</p>
                </div>
            </div>
            <div className="buttons">
                <div className="button">
                    <img src={require("./img/014-poncho.svg").default} alt="Clothes" />
                    <p className="button-text">Clothes</p>
                </div>
                <div className="button">
                    <img src={require("./img/046-inca.svg").default} alt="History" />
                    <p className="button-text">History</p>
                </div>
                <div className="button">
                    <img src={require("./img/043-cathedral of lima.svg").default} alt="Structures" />
                    <p className="button-text">Structures</p>
                </div>
            </div>
            <div className="info">
                <h2>Information</h2>
                <div className="info-block">
                    <div className="minilogo">
                        <img src={require("./img/001-peru.svg").default} alt="Flag of Peru" />
                    </div>
                    <div className="details">
                        <div className="title">President</div>
                        <div className="content">Pedro Castillo</div>
                        <div className="extra">Since 28 July, 2021</div>
                    </div>
                </div>
                <div className="info-block">
                    <div className="minilogo">
                        <img src={require("./img/039-woman.svg").default} alt="Peruvian woman" />
                    </div>
                    <div class="details">
                        <div className="title">Example</div>
                        <div className="content">Lorem ipsum</div>
                        <div className="extra">Lorem ipsum dolor</div>
                    </div>
                </div>
            </div>
        </main>
    )
}