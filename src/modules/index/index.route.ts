import { Route } from "core/interface";
import { Router } from 'express';
import IndexController from "./index.controller";

//ke thua tu core/interface/routes.interface.ts
export default class IndexRoute implements Route{

    public path = '/';
    //kieu Router trong express
    public router = Router();

    public IndexController = new IndexController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, this.IndexController.index);
    }
}