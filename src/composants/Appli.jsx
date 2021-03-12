import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useState } from 'react';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import { instanceFirestore } from '../firebase';

export default function Appli() {

  //usestate -> si on veut un nombre: mettre 0, chaine: '', objet:{}, array:[], objet special: null
  //contient 2 valeurs : variable contient la valeur à suivre, 2e: fonction qui permet de faire une mutation à l'objet
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(
        //retourner l'utilisateur retourné par firebase
        (util) => {
          setUtilisateur(util);
          //créer profil utilisateur dans firestore si util != null
          if(util){
            instanceFirestore.collection('utilisateurs-signets').doc(util.uid).set({
              nom:util.displayName,
              courriel:util.email,
              dateCompte: firebase.firestore.FieldValue.serverTimestamp()
            }, {merge:true})
          }
        }
      );
      console.log("objet utilisateur retourné par google : ", utilisateur);
    }, []
  )

  return (
    <div className="Appli">
      {
        utilisateur ? 
          // utiliser un fragment pour pouvoir ecrire le jsx dans l'operateur ternaire
          <>
            <Entete utilisateur={utilisateur} />
            <section className="contenu-principal">
              <ListeDossiers util={utilisateur} />
              <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
                <AddIcon />
              </Fab>
            </section>
          </>
        :
          <Accueil />
      }
    </div>
  );
}
