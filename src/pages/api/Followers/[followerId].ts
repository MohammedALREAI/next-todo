import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';



export default async (req: NextApiRequest, res: NextApiResponse) => {
  
    if(req.method="GET"){
        try {
          const  {data} = await axios.get(`${process.env.SITE}?results=5`);
    
     res.status(200).json({
         data
     })
    
        } catch {
          res.status(401).end();
          return;
        }
        
    }else{
        res.status(405).json({
            data:[],error:"method  not  found"
        });
    }
}
