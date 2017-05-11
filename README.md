## Smashcast Reaction Overlay
This project is a React driven "website". It's intention is to be used for streaming programs like OBS and xSplit and to show the reactions for a stream on [smashcast.tv](https://smashcast.tv).

**Note:** This project is not official so please do not expect support by Smashcast.tv.

## Usage
1. Run `npm install` or `yarn install` if you want to use yarn
2. Run `npm start` to start a development server on `http://localhost:3000`
3. Test it browsing to `http://localhost:3000?channel=YOURCHANNEL` (Replace `YOURCHANNEL` with the desired channel name)
4. Run `npm run build` to create an optimized production build in `/build`

### Options
You can currently add two options to the query string:
* `transparent`

If set to `true`, the overlay will enable transparent mode. It will then only show the emotes and the numbers on a transparent background.
* `color`

If transparent mode is enabled, you can use this to adjust the color of the text. Use any hexadecimal color excluding the #.

## Screenshots
![Preview](https://github.com/lookapanda/smashcast-reactions-overlay/raw/master/screenshot.png)
