import { Route } from "core/interface";
import express from "express"
class App{
    public app: express.Application;
    public port: string | number;

    constructor(routes: Route[]){
        this.app=express();
        this.initializeRoutes(routes);
        this.port=process.env.PORT || 9999;

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


}

export default App;