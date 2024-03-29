import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    // throw Error('test');
    this.updateChar();
    // this.timerId = setInterval(this.updateChar, 3000);
  }
  componentWillUnmount() {
    // clearInterval(this.timerId);
  }

  onCharLoaded = (char) => {
    // short desc
    char.description =
      char.description === undefined || char.description.length === 0
        ? 'Data not found'
        : char.description.substr(0, char.description.lastIndexOf(' ', 100)) +
          '...';

    this.setState({
      char,
      loading: false,
    }); // == {char: char}
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updateChar = () => {
    this.setState({
      loading: true,
    });
    // console.log('Update');
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService
      // .getAllCharacters().then((res) => console.log(res));
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage></ErrorMessage> : null;
    const spinner = loading ? <Spinner></Spinner> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="randomchar">
        {errorMessage}
        {spinner}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner" onClick={this.updateChar}>
              try it
            </div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className={
          thumbnail.indexOf('image_not_available') > -1
            ? 'randomchar__img not_found'
            : 'randomchar__img'
        }
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
