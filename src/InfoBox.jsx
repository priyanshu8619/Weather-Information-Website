import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL ="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=2048x2048&w=is&k=20&c=3eIsDF7f9rRe4ZsbIGDv7268ue7fBQFA0H3-2OD0gB4=";
    const COLD_URL ="https://images.unsplash.com/photo-1692302963071-6d7e4a3f8280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1715051078474-f627e7d3eadd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxyYWlueSUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon/> }    
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can de described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                       
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    );
}