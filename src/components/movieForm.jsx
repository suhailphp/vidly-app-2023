import React, { Component } from 'react';
import Input from './common/input';
import Select from './common/select';
import { getGenres } from "../services/genreService";
import { saveMovie,getMovie} from "../services/movieService";
import {useNavigate,useParams} from "react-router-dom"


class MovieForm extends Component {
    state = {
        movie:{
            movieID:'new',
            title:'',
            genreID:'',
            numberInStock:'',
            dailyRentalRate:'',
        },
        genres:[],
        error:{}
    } 

    async componentDidMount(){
        let genres = await getGenres()
        this.setState({ genres })
        let {movieID} = this.props;
        
        if(movieID === 'new') return null
        try{
            const {data} = await getMovie(movieID)
            if(!data)
                this.props.navigate('/notFound');
            const movieUpdate = {
                movieID:data.movieID,
                title:data.title,
                genreID:data.genreID,
                dailyRentalRate:data.dailyRentalRate,
                numberInStock:data.numberInStock,
            }
            this.setState({movie:movieUpdate})
        }
        catch(e){
            console.log(e)
            this.props.navigate('/notFound');
        }
    }

    validate =()=>{
        let error = {}
        let {movie} = this.state
    
        if(movie.title === '')
            error.title = 'User name is required'
        if(movie.genreID === '')
            error.genreID = 'Password is required'
        if(movie.dailyRentalRate === '')
            error.dailyRentalRate = 'Rate is required'
        if(movie.numberInStock === '')
            error.password = 'Stock is required'

        return Object.keys(error).length === 0?null:error
    }
    validateProperty=(input)=>{
        if(input.name === 'title'){
            if(input.value === '') return 'title is required'
        }
        if(input.name === 'genreID'){
            if(input.value === '') return 'Genre is required'
        }
        if(input.name === 'dailyRentalRate'){
            if(input.value === '') return 'Rate is required'
        }
        if(input.name === 'numberInStock'){
            if(input.value === '') return 'Stock is required'
        }
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        let error = this.validate()
        this.setState({error:error||{}})
        if(error)
            return false
        try{
            await saveMovie(this.state.movie)
            //console.log(response)
            alert('Movie saved on the databse')
            this.props.navigate('/movies');
        }
        catch(e){
            console.log(e)
            alert('Something went wrong when saving movie')
        }
  
        
    }
    handleChange = (e)=>{
        let error = {...this.state.error}
        let errorMessage = this.validateProperty(e.currentTarget)
        if(errorMessage) error[e.currentTarget.name] = errorMessage
        else delete error[e.currentTarget.name]
        let movie = {...this.state.movie}
        movie[e.currentTarget.name] = e.currentTarget.value;
        this.setState({movie,error})
    }
    render() { 

        let {movie,error,genres} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Login Form</h1>
                <Input
                    name='title'
                    label='Title'
                    value={movie.title}
                    error={(error.title)?error.title:null}
                    onChange={this.handleChange}
                ></Input>
                <Select
                    name='genreID'
                    label='Genre'
                    value={movie.genreID}
                    options={genres}
                    error={(error.genreID)?error.genreID:null}
                    onChange={this.handleChange}
                ></Select>
                <Input
                    name='dailyRentalRate'
                    label='Daily Rental Rate'
                    value={movie.dailyRentalRate}
                    error={(error.dailyRentalRate)?error.dailyRentalRate:null}
                    onChange={this.handleChange}
                ></Input>
                <Input
                    name='numberInStock'
                    label='Number in stock'
                    value={movie.numberInStock}
                    error={(error.numberInStock)?error.numberInStock:null}
                    onChange={this.handleChange}
                ></Input>
                <button className="btn btn-primary" disabled={this.validate()}>Submit</button>
            </form>  
        );
    }
}

const FormComponentWrapper = () => {
  const navigate = useNavigate();
  const params = useParams();
  return <MovieForm navigate={navigate}  movieID={params.movieID}  />;
};
 
export default FormComponentWrapper;