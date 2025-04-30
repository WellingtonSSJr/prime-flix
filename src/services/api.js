import axios from 'axios'
// URL BASE https://api.themoviedb.org/3

// URL API https://api.themoviedb.org/3/movie/5503?api_key=5de1a926e3a17d7bf221d6cb1484a7bb&language=pt

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    accept: "application/json",
    Authorization: "Bear eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGUxYTkyNmUzYTE3ZDdiZjIyMWQ2Y2IxNDg0YTdiYiIsIm5iZiI6MTc0NTk1NTAxMS43NDIsInN1YiI6IjY4MTEyOGMzZGRlNmUxODBmNjgxMzViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m9mhfPrcjP3FI7GIAvpyFyojDIRFy-GTUUwb3R6H28E"
})

// Interceptor para adicionar api_key em todas as requisições
api.interceptors.request.use(
    (config) => {
      // Clone os parâmetros de URL existentes ou crie um objeto vazio
      const params = config.params || {};
      
      // Adicione a api_key aos parâmetros existentes
      config.params = { 
        ...params, 
        page: 2,  // Correto: cada parâmetro deve ser uma chave separada
        api_key: '5de1a926e3a17d7bf221d6cb1484a7bb',
      };
      
      // Se precisar adicionar o parâmetro de idioma por padrão
      if (!config.params.language) {
        config.params.language = 'pt-BR';
      }
      
      return config;
    },
    (error) => Promise.reject(error)
  );



export default api