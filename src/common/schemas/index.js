import { Schema } from 'normalizr';

export let todoSchema = new Schema('todos', {
  idAttribute: '_id',
});

export let todo2Schema = new Schema('todo2', {
  idAttribute: '_id',
});

export let userSchema = new Schema('users', {
  idAttribute: '_id',
});

export let eventSchema = new Schema('events', {
  idAttribute: '_id',
});

export let searchSchema = new Schema('search', {
  idAttribute: '_id',
});
