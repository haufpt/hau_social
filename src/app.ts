import { Route } from "core/interface";
import express from "express"
import mongoose from 'mongoose';
import hpp from 'hpp';
import morgan from 'morgan';
import cors from 'cors';
import helmet  from "helmet";
import { Logger } from "./core/utills";
class App{
    public app: express.Application;
    public port: string | number;
    public production: boolean;

    constructor(routes: Route[]){
        this.app=express();
        this.initializeRoutes(routes);
        this.port=process.env.PORT || 9999;
        this.connectToDatabase();
        this.production = process.env.NODE_ENV == 'production'?true:false;
        this.initializeMiddlewares();
    }

    public listen(){
        this.app.listen(this.port, ()=>{
            Logger.info(`SERVER IS LISTENING ON PORT ${this.port}`);
        });
    }

    private initializeRoutes(routes: Route[]){
        routes.forEach((route)=>{
            this.app.use(route.path, route.router);
        });
    }

    private initializeMiddlewares(){
        if(this.production){
            this.app.use(hpp());
            this.app.use(helmet());
            this.app.use(morgan('combined'));
            this.app.use(cors({origin: 'your.domain.com', credentials: true}));
        }else{
            this.app.use(morgan('dev'));
            this.app.use(cors({origin: true, credentials: true}));
  
        }
    }
    private connectToDatabase(){

        // const connectString=process.env.MONGODB_URL;
        // if(!connectString){
        //     Logger.error('string connect is invalidate');
        //     return;
        // }
        const connectString="mongodb+srv://nguyenduchau12g:projectdautien@main.sbksmxq.mongodb.net/?retryWrites=true&w=majority";
        
            mongoose
            .connect(connectString,{
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                // useFindAndModify: false,
                // useCreateIndex: true,
            })
            .catch((reason)=>{
                Logger.error(reason);
            });
            Logger.info('Connect db success')
        }


}

export default App;