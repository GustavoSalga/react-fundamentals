// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Criando uma ref, um recurso do React para acessar o conteúdo
  // de elementos de formulários
  const usernameEl = React.useRef()

  // Criar uma variável de estado do React
  // Uma variável de estado mantém uma informação mesmo que o conteúdo da página seja atualizado
  // Para ler o conteúdo variável de estado, podemos acessá-la diretamente. No entanto, para alterar seu conteúdo,
  // usamos uma função set.

  // error -> é a variável de estado
  // setError -> é a função de atualização da variável de estado
  // A função useState aceita um parâmetro que é o VALOR INICIAL da variável de estado. Ou seja, nesse caso, error
  // tem um valor inicial de string vazia
  const [msg, setMsg] = React.useState('')
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
      event.preventDefault()  // Previne o recarregamento do formulário
      //const username = document.getElementById('username').value
      //const username = document.querySelector('#username').value
      const username = usernameEl.current.value
      onSubmitUsername(username)
  }

  function handleChange(event){
        // Capturando o valor do input
        const val = event.target.value
/****** 
 * o código abaixo substituiu a verificação maiscula e avisar o usuário, vamos aqui corrigir a letra maiúscula para o 
 * usuário.
        Armazena na variável de estado o valor do input já convertido para minúsculas
*/
        setUsername(val.toLowerCase())
/****
 * o código abaixo verifica e avisa o usuário que não se pode usar letras maiúsculas
        // O input será válido se seu conteúdo for idêntico ao próprio conteúdo em minúsculas
        // por exemplo se digitarmos aaaA ele converte em aaaa e verifica que é diferente.
        const isValid = ( val === val.toLowerCase() )

        // Atualizando o estado 
        setMsg(isValid ? '' : 'O valor informado deve estar em minúsculas.')
*/
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        {/* Associando o ref usernameEl ao input */}
        <input ref={usernameEl} id="username" type="text" onChange={handleChange} value={username} />
      </div>
      {/* O conteúdo da variável de estado por ser lido sem necessidade de função auxiliar */}   
      <div style={ { color: 'red'} }> {msg} </div>    
      <button type="submit">Submit</button>
    </form>
  )

}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
