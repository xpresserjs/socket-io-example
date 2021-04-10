import {Controller, Http} from "xpresser/types/http";


const AppController = <Controller.Object>{
    /**
     * Controller name.
     * @type {string}
     */
    name: 'AppController',

    /**
     * Index Method for "/"
     * @returns {string}
     */
    index: (http): string => http.view('index'),


    another(http: Http){}
};

module.exports = AppController;
