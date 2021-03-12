import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useState } from 'react';

export default function Appli() {

  //usestate -> si on veut un nombre: mettre 0, chaine: '', objet:{}, array:[], objet special: null
  //contient 2 valeurs : variable contient la valeur à suivre, 2e: fonction qui permet de faire une mutation à l'objet
  const etatUtilisateur = useState(null);
  const [utilisateur, setUtilisateur] = etatUtilisateur;

  return (
    <div className="Appli">
      {
        utilisateur ? 
          // utiliser un fragment pour pouvoir ecrire le jsx dans l'operateur ternaire
          <>
            <Entete />
            <section className="contenu-principal">
              <ListeDossiers />
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
