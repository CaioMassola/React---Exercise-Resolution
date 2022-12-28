import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const [blockBtn, setBlockBtn] = useState(false);

  const getLogin = () => {
    setBlockBtn(true)
    setError('')
    if(email && password) {
    login({email, password}).then((x) => {
        alert(`Success!${'\n'}${x.message}`)
        setBlockBtn(false)
        setEmail('')
        setPassword('')

      }).catch((e) => {
        setError(e.message)
        setBlockBtn(false)
      }).finally(() => {
        setBlockBtn(false)
      })
    } else {
      setError('E-mail or password wrong.')
      setBlockBtn(false)
    }
  }

  const handleEmail = (x) => {
    setEmail(x.target.value)
    setError('')
  }

  const handlePassword = (x) => {
    setPassword(x.target.value)
    setError('')
  }
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {
          errorMessage && (
           <div className='errorMessage'>{errorMessage}</div> 
          )
        }
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input 
            id={'email'} 
            type={'email'} 
            autoComplete='off' 
            value={email} placeholder={'Email...'} 
            onChange={(x) => handleEmail(x) } 
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input 
            id={'password'} 
            type={'password'} 
            value={password} 
            placeholder={'Password...'} 
            onChange={(x) => handlePassword(x)}
          />
        </div>

        <div className='button'>
          <button onClick={() => getLogin()} disabled={blockBtn ? true : false}>Login</button>
        </div>
      </div>
    </div>
  );
}
