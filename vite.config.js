import { resolve, join } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: join(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drumkit: resolve(__dirname, 'pages/drum-kit/index.html'),
        clock: resolve(__dirname, 'pages/clock/index.html'),
        variables: resolve(__dirname, 'pages/variables/index.html'),
        arrayone: resolve(__dirname, 'pages/array-one/index.html'),
        gallery: resolve(__dirname, 'pages/gallery/index.html'),
        fetch: resolve(__dirname, 'pages/fetch/index.html'),
        arraytwo: resolve(__dirname, 'pages/array-two/index.html'),
        canvas: resolve(__dirname, 'pages/canvas/index.html'),
        tricks: resolve(__dirname, 'pages/tricks/index.html'),
        check: resolve(__dirname, 'pages/check/index.html'),
        video: resolve(__dirname, 'pages/video/index.html'),
        konami: resolve(__dirname, 'pages/konami/index.html'),
        slide: resolve(__dirname, 'pages/slide/index.html'),
        objects: resolve(__dirname, 'pages/objects/index.html'),
        localstorage: resolve(__dirname, 'pages/local-storage/index.html'),
        mousemove: resolve(__dirname, 'pages/mouse-move/index.html'),
        sort: resolve(__dirname, 'pages/sort/index.html'),
        reduce: resolve(__dirname, 'pages/reduce/index.html'),
        webcam: resolve(__dirname, 'pages/webcam/index.html'),
        speech: resolve(__dirname, 'pages/speech/index.html'),
        geolocation: resolve(__dirname, 'pages/geolocation/index.html'),
        followalong: resolve(__dirname, 'pages/follow-along/index.html'),
        speechrecognition: resolve(__dirname, 'pages/speech-recognition/index.html'),
        sticky: resolve(__dirname, 'pages/sticky/index.html'),
        eventcapture: resolve(__dirname, 'pages/event-capture/index.html'),
        dropdown: resolve(__dirname, 'pages/drop-down/index.html'),
        draganddrop: resolve(__dirname, 'pages/drag-and-drop/index.html'),
        videospeed: resolve(__dirname, 'pages/video-speed/index.html'),
        countdown: resolve(__dirname, 'pages/countdown/index.html'),
        whackamole: resolve(__dirname, 'pages/whack-a-mole/index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})