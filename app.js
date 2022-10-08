const container = document.querySelector('.post')
const button = document.querySelector('button')

const getAdviceAPI = async () => {
  const response = await fetch(`https://api.adviceslip.com/advice`)
  return response.json()
}

const adviceIntoDOM = async () => {
  const dados = await getAdviceAPI()
  const { slip } = dados

  const intoDOM = `
  <p>Advice #<span class="post-id">${slip.id}</span>
    </p>
    <h1 class="post-body">${slip.advice}</h1>
  `
  return intoDOM
}

button.addEventListener('click', async () => {
  container.innerHTML = await adviceIntoDOM()
})
