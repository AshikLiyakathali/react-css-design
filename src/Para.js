import React from "react";
import "./App.css";

export default class Para extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <div id="branding">
              <h1>
                <span class="highlight">Sample Responsive Web Design</span>
              </h1>
            </div>
            <nav>
              <ul>
                <li>Paragraph 1</li>
                <li class="current">Paragraph 2</li>
                <li>Paragraph 3</li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="container">
          <h2>Para 1</h2>
          <p className="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
            Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
            porta in, lacinia et magna. Nam eget eros non orci consectetur
            congue at ac augue. Proin eget arcu in enim feugiat ultricies.
            Curabitur maximus metus nec metus pretium viverra at et orci.
            Integer hendrerit ante ut placerat cursus.
          </p>
          <h2>Para 2</h2>
          <p className="dark">
            Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor,
            vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris
            vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id
            dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor
            lorem sapien, in aliquet sapien convallis et. Donec nec mauris
            nulla. Curabitur cursus semper odio, et hendrerit ante.
          </p>

          <h2>Para 3</h2>
          <p className="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
            Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
            porta in, lacinia et magna
          </p>
        </div>
      </div>
    );
  }
}
