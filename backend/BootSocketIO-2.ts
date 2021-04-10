/**
 * Same concept as main BootSocketIO.ts
 * But io instance is saved to $.io;
 */
import {TodoFunction} from "xpresser/types";
import {Server} from "socket.io";

export = function (next, $) {
    /**
     * Initialize socket.io using $.http
     * Add to `$.io`
     *
     * Note:`$.o` was declared first in xpresser.d.ts
     * @see "backend/types/xpresser.d.ts"
     */
    $.io = new Server($.http)

    //Whenever someone connects this gets executed
    $.io.on('connection', function (socket) {
        $.logInfo(`A user with id: "${socket.id}" connected`);

        //Whenever someone disconnects this piece of code executed
        socket.on('disconnect', function () {
            $.logCalmly(`A user with id: "${socket.id}" disconnected`);
        });
    });

    // Continue Boot Cycle
    return next()
} as TodoFunction;