import { Route } from "core/interface";
import express from "express"
import mongoose from 'mongoose';
class App{
    public app: express.Application;
    public port: string | number;

    constructor(routes: Route[]){
        this.app=express();
        this.initializeRoutes(routes);
        this.port=process.env.PORT || 9999;
        this.connectToDatabase();
    }

    public listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER IS LISTENING ON PORT ${this.port}`);
        });
    }

    private initializeRoutes(routes: Route[]){
        routes.forEach((route)=>{
            this.app.use(route.path, route.router);
        });
    }

    private connectToDatabase(){

        const connectString='mongodb+srv://nguyenduchau12g:projectdautien@main.sbksmxq.mongodb.net/?retryWrites=true&w=majority';
        try {
            mongoose.connect(connectString);
            console.log('Connect db success')
        } catch (error) {
            console.log('Connect to Db failed')
        }

        }


}

export default App;