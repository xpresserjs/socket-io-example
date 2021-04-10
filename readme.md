# Xpresser Socket.io Example

![Alt text](https://cdn.jsdelivr.net/npm/xpresser/xpresser-logo-black.png "Xpresser Logo")

Socket.io Example using.

- xpresser `0.14.0`
- socket `4.0.1`

### Use

1. Clone Or Download
2. Run `yarn` or `npm` install.
3. check config in [config.ts](./config.ts)
4. Run `npm run ts-dev` or `yarn run ts-dev`
5. Read [Xpresser Documentation](https://xpresserjs.com/typescript)

### Package Commands

```json
{
  "build": "xjs @stack tsc",
  "ts-watch": "tsc --watch",
  "ts-dev": "ts-node-dev --respawn app.ts",
  "start": "npm run build && node build/app.js",
  "start-dev": "nodemon build/app.js"
}
```

- **build**: Build Typescript files
- **ts-watch**: Compile typescript in realtime while watching for changes.
- **ts-dev**: Start app in typescript mode.
- **start**: Builds file and runs built file.
- **js-dev**: Uses `nodemon` to run the built file. This is useful when using tsc watch.


### Docker
```sh
docker run -d -p 3000:3000 xpresserjs/socket.io-example:latest
```
#### What next?

Please, Star Project :)
Thank you so much.
