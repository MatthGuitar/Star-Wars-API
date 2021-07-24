import React from 'react'
import { Card, Grid, Container } from 'semantic-ui-react'
import Style from '../style/Characters.module.css'

const Characters = ({ data }) => {
  return (
    <section className={Style.bg}>
      <Container>
        <h1 className={Style.title}>Characters</h1>
        <Grid columns={3}>
          {data.map((people, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content style={{ 
                  backgroundColor: "#000", padding: "25px 20px" }}>
                    <Card.Header style={{
                     color: "#f3dc0b",
                     fontSize: "2em",
                     paddingBottom: "5px" }}>{people.name}</Card.Header>
                    <Card.Description>
                      <h2>Height</h2>
                      <p>{people.height} Cm</p>
                      <h2>Weight</h2>
                      <p>{people.mass} Kg</p>
                      <h2>Gender</h2>
                      <p>{people.gender}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
          })}

        </Grid>
      </Container>
    </section>
  )
}

export default Characters