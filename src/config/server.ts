import dotenv from 'dotenv'
dotenv.config();



type Serverconfig={
    PORT:Number
}
export const serverconfig:Serverconfig={

    PORT:Number(process.env.PORT)||3001
}