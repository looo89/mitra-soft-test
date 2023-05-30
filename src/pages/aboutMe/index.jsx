import { Container, Card } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <h2>Привет! Меня зовут Лукьянова Мария.</h2> 
      <h2>Я начинающий frontend разработчик.</h2>
      <p>Ищу интересный проект с крутой командой, так как моя главная цель — обучение и развитие.</p>
      <p>Мне важно писать качественный код под руководством лучших в своём деле.</p>
      <p>Имею коммерческий опыт на стэке: TypeScript, React, Redux, RTK Query, Gitlab, Material-ui, Axios.</p>
      <p>Git: <Card.Link href="https://github.com/looo89">https://github.com/looo89</Card.Link></p>
      <p>email: <Card.Link href="looo89@yandex.ru">looo89@yandex.ru</Card.Link></p>
    </Container>
  )
}

export default AboutMe