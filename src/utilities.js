export const root = "https://image.tmdb.org/t/p/w185";
// export const rootTitle = "https://api.themoviedb.org/3/movie/{movie_id}/alternative_titles?api_key=210d6a5dd3f16419ce349c9f1b200d6d"

export const checkError = (type,value) => {


    switch(type) {

        case 'email' :

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                
                return "Introduce un e-mail válido";
            }else{
                return "ok";
            };
            
        
        case 'name': 

            if (! /[a-z]/gi.test(value) ) {
                return "Introduce un nombre válido";
            }else{
                return "ok";
            };

        
        case 'phone':

            if (! /[\d()+-]/g.test(value) ) {
                return "Introduce un telefono válido";
            }else{
                return "ok";
            };

        default:
            return "ok";
        

    }
};