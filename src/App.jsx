import React, {useState} from 'react';
import Calculator from './components/Calculator';
import Increment from './components/Increment';
import InputField from './components/InputField';
import TodoList from './components/List/TodoList';
import PostList from './components/List/PostList';
import PhotoList from './components/List/PhotoList';
import CommentList from './components/List/CommentList';
import AlbumList from './components/List/AlbumList';
function app(){
  return (
    <>
      <br></br>
      <br></br>
      <h1 class="text-center">Alejandro A. Cayasa</h1>
      <Increment/>
      <Calculator/>
    </>

  );
}




export default app;