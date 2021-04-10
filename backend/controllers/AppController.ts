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


    example: (http) => {
        // Get io from $
        // If using BootSocketIO-2.ts
        const io = http.$("io");

        return http.view('index')
    }
};

export = AppController;
