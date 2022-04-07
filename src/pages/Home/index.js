import {Grid} from "@mui/material"
import imagen from "../../assets/image1.png"

const Index = () => {
  return (
    <div className="imgFondo">

      <Grid alignItems="center" spacing={3}>
        <Grid item md={6} >
          <div className="texto">
          <h1 ><b>GOOD PARENTS</b></h1>
          <span>JUGUETES EDUCATIVOS</span>
          <p>Juguetes ideales para tus hijos, que ayudara en su crecicimento intelectual y emocional</p>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="center">
            <img src={imagen} alt=""/>
          </div>
 
        </Grid>

      </Grid>
    </div>

  )
}
export default Index
