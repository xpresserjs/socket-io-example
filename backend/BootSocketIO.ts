/**
 * This file exports a function that runs when server is booted
 * Using xpresser's `$.on.serverBooted` event
 *
 * Meaning express has initialized and the `$.http` is available.
 * Socket needs `$.http` to bind to your server.
 *
 * Read about `$.http` https://xpresserjs.com/dollar-sign.html#http
 */
import {TodoFunction} from "xpresser/types";
import {Server} from "socket.io";

export = function (next, $) {
    /**
     * Initialize socket.io using $.http
     */
    const io = new Server($.http)

    //Whenever someone connects this gets executed
    io.on('connection', function (socket) {
        $.logInfo(`A user with id: "${socket.id}" connected`);

        //Whenever someone disconnects this piece of code executed
        socket.on('disconnect', function () {
            $.logCalmly(`A user with id: "${socket.id}" disconnected`);
        });
    });

    // Continue Boot Cycle
    return next()
} as TodoFunction;