import React from 'react';
import styles from './App.module.css';

//?
import useDisplay from './useDisplay/useDisplay';
import ButtonSet from './useDisplay/ButtonSet';
import Break from './Break';

const App = () => {
  const light1 = useDisplay('Luz 1');
  const light2 = useDisplay('Luz 2');
  const light3 = useDisplay('Luz 3');

  const garagem = useDisplay('Garagem');
  const janela = useDisplay('Janelas');

  const air = useDisplay('Ar condicionado');

  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.options}>
          <h1>Opções</h1>
          
          <h2>Luzes</h2>
          <ButtonSet set={light1.setState} text='Luz 1' />
          <ButtonSet set={light2.setState} text='Luz 2' />
          <ButtonSet set={light3.setState} text='Luz 3' />

          <h2>Portas e janelas</h2>
          <ButtonSet set={garagem.setState} text='Garagem' />
          <ButtonSet set={janela.setState} text='Janelas' />

          <h2>Outros</h2>
          <ButtonSet set={air.setState} text='Ar condicionado' />
        </div>

        <div className={styles.display}>
          <h1 style={{marginBottom: '1rem'}}>Display da casa</h1>
          <light1.DisplayObject />
          <light2.DisplayObject />
          <light3.DisplayObject />
          <Break />

          <garagem.DisplayObject />
          <janela.DisplayObject />
          <Break />

          <air.DisplayObject />
        </div>
      </div>
    </div>
  );
};

export default App;
