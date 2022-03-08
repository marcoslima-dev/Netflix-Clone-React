import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow/index.jsx'
import './App.css'
import FeatureMovie from './components/FeaturedMovie/'
import Header from './components/Header'

export default () => {


  const [movielist, setMovielist] =  useState([]);
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  useEffect(()=>{
    //Pegando a lista de filmes da API
    const loadAll = async()=>{
      let list = await tmdb.getHomeList();
      setMovielist(list)

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo =  await tmdb.getMovieInfo(chosen.id,'tv');
      setFeatureData(chosenInfo);
    }

    loadAll()
  },[])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featureData && 
        <FeatureMovie item={featureData} />
      }

      <section className="lists">
      {movielist.map((item,key)=> (
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}  
      </section>


        <footer>
          Feito com <span role="img" aria-label='coração'>❤️</span> por: Marcos Lima dev ;) <br/>
          Direitos de imagem para Netflix <br/>
          Dados pegos no site Themoviedb.org
        </footer>



        {movielist.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2.gif" alt="" />
        </div>
        }
    </div>
  )
}