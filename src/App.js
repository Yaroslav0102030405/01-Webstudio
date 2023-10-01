import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Work from './components/Work/Work';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
// import onEntry from './Animal';
import Modal from './components/Modal/Modal';
// import IconClous from './images/close-black.svg';



class App extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="App">
        <Header />
        <Hero />
        <button className="btn" type="button" onClick={this.toogleModal}>
          Order Service
        </button>
        {showModal && (
          <Modal>
            <form>
              <button
                className="btn-clouse hover form-icon"
                type="button"
                onClick={this.toogleModal}
              >
                x
              </button>
              <h1 class="form-title">
                Оставьте свои данные, мы вам перезвоним
              </h1>
              <input
                class="form-input"
                type="text"
                name="name"
                id="name"
                autocomplete="name"
                placeholder="Имя"
                required
              ></input>
              <input
                class="form-input"
                type="tel"
                name="tel"
                id="tel"
                autocomplete="tel"
                placeholder="Телефон"
                required
              ></input>
              <input
                class="form-input"
                type="email"
                name="mail"
                id="mail"
                autocomplete="email"
                placeholder="Почта"
                required
              ></input>
              <textarea
                name="comment"
                id="comment"
                rows="10"
                placeholder="Комментарий"
              ></textarea>

              <label>
                <input
                  class="real-checkbox"
                  type="checkbox"
                  name="topic"
                  value="js"
                  id="js"
                  required
                ></input>
                <span class="custom-checkbox"></span>
                <span class="form-text">Соглашаюсь с рассылкой и принимаю</span>
                <a class="form-link" href="#">
                  <span>Условия договора</span>
                </a>
              </label>
              <button class="btn" type="submit">
                Отправить
              </button>
            </form>
          </Modal>
        )}
        <Features />
        <Work />
        <Team />
        <Clients />
        <Footer />
        {/* <Animal /> */}
      </div>
    );
  }
}

export default App;
