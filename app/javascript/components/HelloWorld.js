import React from 'react';
import { Banner } from './Banner/Banner';
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';
import SyncLoader from 'react-spinners/SyncLoader';
import axios from 'axios';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: this.props.names,
      sentences: this.props.sentences,
      show: false,
      counter: 5,
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubstraction = this.handleSubstraction.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    axios
      .delete(`/names/${id}`)
      .then((response) => {
        this.setState({
          show: !this.state.show,
        });
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  }

  handleSubstraction() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
      show: !this.state.show,
    }));
    console.log(this.state.counter);
    if (this.state.counter === 4) {
      this.setState({
        loading: false,
        counter: 5,
      });
    }
  }

  handleClick() {
    this.setState({
      loading: true,
    });
    setTimeout(() => this.handleSubstraction(), 2000);
  }
  render() {
    const { names, sentences, show, loading } = this.state;
    return (
      <React.Fragment>
        <Modal
          show={show}
          name={names[0].full_name}
          sentence={sentences[Math.ceil(Math.random(10) * 19)].full_sentence}
          click={() => this.handleDelete(names[0].id)}
        />
        <Banner />
        <div className="spinner">
          <SyncLoader size={15} color={'#FD1015'} loading={loading} />
        </div>
        <div className="button-container">
          <button onClick={this.handleClick}>Match!</button>
        </div>
      </React.Fragment>
    );
  }
}

export default HelloWorld;
