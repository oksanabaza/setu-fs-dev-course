import { v4 } from "uuid";
import { trackMemStore } from "./track-mem-store.js";

let playlists = [];

export const playlistMemStore = {
  async getAllPlaylists() {
    return playlists;
  },

  async getUserPlaylists(userid) {
    return playlists.filter((playlist) => playlist.userid === userid);
  },

  async addPlaylist(playlist) {
    playlist._id = v4();
    playlists.push(playlist);
    return playlist;
  },

  async getPlaylistById(id) {
    await db.read();
    let list = db.data.playlists.find((playlist) => playlist._id === id);
    if (list) {
      list.tracks = await trackJsonStore.getTracksByPlaylistId(list._id);
    } else {
      list = null;
    }
    return list;
  },

  async deletePlaylistById(id) {
    await db.read();
    const index = db.data.playlists.findIndex((playlist) => playlist._id === id);
    if (index !== -1) db.data.playlists.splice(index, 1);
    await db.write();
  },


  async deleteAllPlaylists() {
    playlists = [];
  },
};