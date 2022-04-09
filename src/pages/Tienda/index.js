import {useState, useEffect, useContext} from "react";
import {Grid, Container, Button, Card, CardContent, CardMedia, Box, FormControl,
  InputLabel,
  Select,
  MenuItem,} from "@mui/material";
import {getProductToys} from "../../services/firestore";
import AppContext from '../../context/AppContext'

import "./tienda.css";


const Tienda = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data =await getProductToys ();
    
    setProducts(data);
  };

  useEffect (() => {
    fetchProducts();
    
  }, []);

  //Begin : FMarinT
  const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart({...item,quantity: 1});
	}

  //End : FMarinT

  return (
    
    <Container>
      <Grid container mt={5} spacing={3}>
        <Grid item md={2} className="menu" mt={3}>
          <Grid mt={1} >
              <div>
                <h2>Filtrar por:</h2>
                <br/>
                <FormControl fullWidth>
                  <InputLabel>Edades:</InputLabel>
                  <Select label="Edades">
                    <MenuItem value="Todos">Todos</MenuItem>
                    <MenuItem value="1 a 3">1 a 3</MenuItem>
                    <MenuItem value="3 a 5">3 a 5</MenuItem>
                    <MenuItem value="5 a 7">5 a 7</MenuItem>
                    <MenuItem value="7 a 9">7 a 9</MenuItem>
                  </Select>
                </FormControl>
                <br/>
                <FormControl fullWidth>
                  <InputLabel>Material</InputLabel>
                  <Select label="material">
                    <MenuItem value="Todos">Todos</MenuItem>
                    <MenuItem value="madera">Madera</MenuItem>
                    <MenuItem value="madera/metal">Madera/Metal</MenuItem>
                    <MenuItem value="varios">Varios</MenuItem>
                    <MenuItem value="plastico">Plastico</MenuItem>
                  </Select>
                </FormControl>
                <br/>
                <FormControl fullWidth>
                  <InputLabel>Funcion:</InputLabel>
                  <Select label="funcion">
                    <MenuItem value="Todos">Todos</MenuItem>
                    <MenuItem value="psicomotricidad">Psicomotricidad</MenuItem>
                    <MenuItem value="sensorial">Sensorial</MenuItem>
                    <MenuItem value="reconocimiento">Reconocimiento</MenuItem>
                    <MenuItem value="memoria">Memoria</MenuItem>
                    <MenuItem value="geometria">Geometria</MenuItem>
                  </Select>
                </FormControl>
                <br/>
              </div>
          </Grid>
        </Grid>
        
        <Grid item md={10} >
          <Grid padding={2} className="ordenar">
          <FormControl fullWidth>
            <InputLabel>Ordenar por:</InputLabel>
            <Select label="Ordenar por">
            <MenuItem value="Todos">Todos</MenuItem>
              <MenuItem value="nombre">Nombre</MenuItem>
              <MenuItem value="precio">Precio</MenuItem>
              <MenuItem value="funcion">Funcion</MenuItem>
            </Select>
          </FormControl>
          </Grid>


          <Grid container spacing={3} mt={2} mb={5}>
           {products.length > 0 &&
            products.map((product) => (
              <Grid item md={4} >
                  <Card height={200}>
                    <CardMedia component="img" height={200} width={250} image={product.url}
                    />
                    <CardContent>
                      <div className="description">
                        <p>{product.name}</p>
                        <span className="price">Precio $ {product.precio}</span>
                        
                        <Button variant="contained" className="button" >Ver detalles</Button>
                        <Button variant="contained" onClick={() => handleClick(product)} className="button" >Agregar</Button>

                      </div>
                    </CardContent>
                  </Card>  
                </Grid>
          ))}  
          </Grid>   
        </Grid>
      </Grid>          


    </Container>
          
    )};


export default Tienda;