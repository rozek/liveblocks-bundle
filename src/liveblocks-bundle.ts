import {
  createClient,
  LiveList, LiveMap, LiveObject
} from "@liveblocks/client"

const LiveBlocks = {
  createClient,
  LiveList, LiveMap, LiveObject
}

// @ts-ignore allow "window.liveblocks"
window.liveblocks = LiveBlocks

document.dispatchEvent(
  new CustomEvent('liveblocks',{ detail:LiveBlocks })
)
