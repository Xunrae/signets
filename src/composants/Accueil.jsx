import './Accueil.scss';
import firebase from 'firebase/app';
import { instanceFirebaseUi } from '../firebase';

export default function Accueil(props){
    return(
        <div className="Accueil">
            <h3 className="logo">Signets <span>beta</span></h3>
            {/* h2.amorce+h4.etiquettes+dive.firebase-widget */}
            <h2 className="amorce">Organisez vos signets Web, <br/> Simple comme bonjour!</h2>
            <h4 className="connexion-etiquette">Connexion à Signets</h4>
            <div className="firebaseui-widget"></div>
        </div>
    )
}