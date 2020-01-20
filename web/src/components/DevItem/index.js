import React, {useState} from 'react';
import './styles.css';

function DevItem(props) {
    const { dev, onRemove } = props;
    const [github_username] = useState(dev.github_username);

    async function handleRemoveDev(e){
      e.preventDefault();
      await onRemove({
      github_username
      });
    }

    return (
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
        <i className="material-icons" id="trash" onClick={handleRemoveDev}>delete</i>
      </li>
    );
}

export default DevItem;