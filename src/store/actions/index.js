/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as types from '../types';

const URL = 'https://api.rawg.io/api';

export const getGames = createAsyncThunk(types.GET_GAMES,
  async () => {
    const { data } = await axios.get(`${URL}/games?key=b83701e00bdf4e8fa7e7e7c8f6c1d9cb`);
    const games = data.results.map((game) => ({
      id: game.id,
      title: game.name,
      image: game.background_image,
      gener: game.genres.map((genre) => genre.name).join(', '),
      released: game.released,
      platphorm: game.platforms.map((platform) => platform.platform.name).join(', '),
      year_start: game.released.split('-')[0],
      playtime: game.playtime,
      updated: game.updated,
      suggestions_count: game.suggestions_count,
      rating: game.rating,
      tags: game.tags.map((tag) => tag.name).join(', ').split(', ', 5).join(', '),
      stores: game.stores.map((store) => store.store.name).join(', '),
    }));
    return games;
  });
