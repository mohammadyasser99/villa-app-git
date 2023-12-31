import { QueryClient } from '@tanstack/react-query';
 const url ='https://villa-irqj.onrender.com'
//const url ='http://localhost:5000'

export const queryClient = new QueryClient();

export async function fetchslideshows({signal})  {

    
    const response = await fetch(`${url}/auth/getslideshow`,{signal}).then(res => res.json());
    return response;

    
}

export async function fetchproperties({signal})  {

    
    const response = await fetch(`${url}/auth/getproperty`,{signal}).then(res => res.json());
    return response;

    
}

export async function register (data)  {
    const response = await fetch(`${url}/auth/register`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then(res => res.json());
    return response;
}

export async function login (data)  {
    const response = await fetch(`${url}/auth/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then(res => res.json());
    return response;
}


export async function schedule (data)  {
    const response = await fetch(`${url}/auth/schedule`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then(res => res.json());
    return response;
}

