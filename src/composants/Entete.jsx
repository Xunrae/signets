import './Entete.scss';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';

export default function Entete({utilisateur}) {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <Button variant="outlined" size="small" className="btnDeconnexion" onClick={()=> firebase.auth().signOut()}>
        Déconnexion
      </Button>
      <div className="utilisateur">{utilisateur.displayName} <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} /></div>
    </header>
  );
}