import {Controller} from "xpresser/types/http";


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
    index: (http) => http.view('index'),
};

export = AppController;
